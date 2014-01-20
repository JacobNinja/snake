(ns snake.core
  (:require [cljs.core.async :as async
             :refer [<! >! chan timeout alts! sliding-buffer put! filter< take!]]
            [clojure.set :refer [intersection map-invert]]
            [snake.window :as window]
            [clojure.browser.event :as event]
            [goog.events.KeyHandler :as key-handler]
            [goog.events.KeyCodes :as key-codes])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [snake.macros :refer [defhandler defchan]]))

(def draw-chan (chan))

;; History

(def history (atom []))

(defn- save-history! [next-env]
  (swap! history conj next-env))

;; Keyboard

(def directions {key-codes/UP [0 -1]
                 key-codes/RIGHT [1 0]
                 key-codes/DOWN [0 1]
                 key-codes/LEFT [-1 0]})
(def opposites {key-codes/DOWN key-codes/UP
                key-codes/LEFT key-codes/RIGHT})

(defn- topic [v]
  (if (directions v)
    :direction
    :command))

(def keyboard (goog.events.KeyHandler. js/document))
(def keyboard-chan (chan (sliding-buffer 1)))
(def keyboard-pub (async/pub keyboard-chan topic))

(def direction-chan (async/sub keyboard-pub :direction (chan (sliding-buffer 1))))
(def command-chan (async/sub keyboard-pub :command (chan (sliding-buffer 1))))

(defn- keyboard-listen []
  (event/listen keyboard "key" #(put! keyboard-chan (.-keyCode %))))

;; Helper fns

(defn- random-coords [[height width]]
  [(rand-nth (range width))
   (rand-nth (range height))])

(defn- generate-random-fruit [dimensions]
  (repeatedly 3 #(random-coords dimensions)))

(defn- add-points [& pts]
  (vec (apply map + pts)))

(defn- valid-direction? [current-direction next-direction]
  (every? false? (map #(= (% current-direction) next-direction)
                      [opposites (map-invert opposites)])))

;; Handlers

(defhandler adjust-coords [coords direction length]
  {:coords
   (cons (add-points (first coords) (directions direction))
         (take (dec length) coords))})

(defn- adjust-direction [{:keys [direction] :as env} key]
  (merge env
         (when (and (directions key)
                    (valid-direction? direction key))
           {:direction key})))

(defhandler fruit-collision-check [coords fruit length]
  (let [fruit-collisions (intersection (set coords) (set fruit))]
    (when-not (empty? fruit-collisions)
      {:length (inc length)
       :fruit (remove fruit-collisions fruit)})))

(defhandler boundary-check [coords dimensions]
  (let [[x y] (first coords)
        [height width] dimensions]
    (when (or (or (>= y height) (< y 0))
              (or (>= x width) (< x 0)))
      {:game-over "Out of bounds"})))

(defhandler snake-collision-check [coords]
  (when (some #(> % 1) (vals (frequencies coords)))
    {:game-over "Snake collision"}))

(defhandler level-up [fruit level timer dimensions]
  (when (zero? (count fruit))
    {:fruit (generate-random-fruit dimensions)
     :level (inc level)
     :timer (/ timer 2)}))

(defhandler increase-frame [frame]
  {:frame (inc frame)})

(defn- tick [env key]
  (-> env
      (adjust-direction key)
      fruit-collision-check
      adjust-coords
      increase-frame
      boundary-check
      level-up
      snake-collision-check))

;; Game modes

(defchan undo-mode [undo-history]
  (loop [frame (dec (count undo-history))]
    (>! draw-chan (nth undo-history frame))
    (let [key (<! command-chan)]
      (condp = key
        key-codes/B (recur (if (< (dec frame) 0)
                             frame
                             (dec frame)))
        key-codes/F (recur (if (< (inc frame) (count undo-history))
                             (inc frame)
                             frame))
        key-codes/SPACE (vec (take (inc frame) undo-history))
        (recur frame)))))

(defchan pause! []
  (reset! history (<! (undo-mode @history)))
  (last @history))

(defn- game-over! [env]
  (swap! history pop)
  (js/alert (str "Game over!" \newline (env :game-over)))
  (pause!))

;; Game loop and initialization

(defn- init-env [dimensions]
  {:coords [(random-coords dimensions)]
   :fruit (generate-random-fruit dimensions)
   :length 1
   :timer 300
   :level 1
   :frame 1
   :dimensions dimensions})

(defn- game-loop [env]
  (go
   (>! draw-chan env)
   (save-history! (assoc env :direction (<! direction-chan)))
   (loop [env (last @history)]
     (>! draw-chan env)
     (<! (timeout (env :timer)))
     (let [[key _] (alts! [direction-chan command-chan (timeout 1)] :default (:direction env))
           next-env (if (= key key-codes/SPACE)
                      (<! (pause!))
                      (tick env key))]
       (save-history! next-env)
       (recur (if (next-env :game-over)
                (<! (game-over! next-env))
                next-env))))))

(defn ^:export init []
  (keyboard-listen)
  (game-loop (init-env
              (snake.window/init draw-chan))))
