(ns snake.core
  (:require [cljs.core.async :as async
             :refer [<! >! chan timeout alts! sliding-buffer]]
            [clojure.set :refer [intersection map-invert]]
            [snake.window :as window]
            [clojure.browser.event :as event]
            [goog.events.KeyHandler :as key-handler]
            [goog.events.KeyCodes :as key-codes])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [snake.macros :refer [defhandler]]))

;; Keyboard

(def keyboard (goog.events.KeyHandler. js/document))
(def keyboard-chan (chan (sliding-buffer 1)))

(def directions {key-codes/UP [0 -1]
                 key-codes/RIGHT [1 0]
                 key-codes/DOWN [0 1]
                 key-codes/LEFT [-1 0]})
(def opposites {key-codes/DOWN key-codes/UP
                key-codes/LEFT key-codes/RIGHT})

(defn- push-key [key]
  (let [key-number (.-keyCode key)]
    (when (directions key-number)
      (go (>! keyboard-chan key-number)))))
  
(defn- keyboard-listen []
  (event/listen keyboard "key" push-key))

;; Helper fns

(defn- random-coords [height width]
  [(rand-nth (range width))
   (rand-nth (range height))])

(defn- generate-random-fruit [[height width]]
  (repeatedly 3 #(random-coords height width)))

(defn- add-points [& pts]
  (vec (apply map + pts)))

(defn- valid-direction? [current-direction next-direction]
  (every? false? (map #(= (% current-direction) next-direction)
                      [opposites (map-invert opposites)])))

(defn- init-env [env]
  (let [[height width] (map deref (env :dimensions))]
    (merge env {:coords [(random-coords height width)]
                :fruit (generate-random-fruit [height width])
                :length 1
                :timer 300
                :level 1})))

;; Handlers

(defhandler adjust-coords [coords direction length]
  {:coords
   (cons (add-points (first coords) (directions direction))
         (take (dec length) coords))})

(defhandler adjust-direction [direction next-direction]
  (when (valid-direction? direction next-direction)
    {:direction next-direction}))

(defhandler fruit-collision-check [coords fruit length]
  (let [fruit-collisions (intersection (set coords) (set fruit))]
    (when-not (empty? fruit-collisions)
      {:length (inc length)
       :fruit (remove fruit-collisions fruit)})))

(defhandler boundary-check [coords dimensions]
  (let [[x y] (first coords)
        [height width] (map deref dimensions)]
    (when (or (or (> y height) (< y 0))
              (or (> x width) (< x 0)))
      {:game-over "Out of bounds"})))

(defhandler snake-collision-check [coords]
  (when (some #(> % 1) (vals (frequencies coords)))
    {:game-over "Snake collision"}))

(defhandler level-up [fruit level timer dimensions]
  (when (zero? (count fruit))
    {:fruit (generate-random-fruit (map deref dimensions))
     :level (inc level)
     :timer (/ timer 2)}))

;; Game loop and initialization

(defn- game-loop [draw env]
  (go
   (>! draw env)
   (loop [env (assoc env :direction (<! keyboard-chan))]
     (>! draw env)
     (<! (timeout (env :timer)))
     (let [[direction _] (alts! [keyboard-chan (timeout 1)] :default (:direction env))
           next-env (->> (assoc env :next-direction direction)
                         adjust-direction
                         fruit-collision-check
                         adjust-coords
                         boundary-check
                         level-up
                         snake-collision-check)]
       (if (next-env :game-over)
         (js/alert (str "Game over!" \newline (next-env :game-over)))
         (recur next-env))))))

(defn ^:export init []
  (let [draw (chan)
        env (snake.window/init draw)]
    (keyboard-listen)
    (game-loop draw (init-env env))))
