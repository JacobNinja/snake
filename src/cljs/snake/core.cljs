(ns snake.core
  (:require [cljs.core.async :as async
             :refer [<! >! chan timeout alts! sliding-buffer]]
            [clojure.set :refer [intersection map-invert]]
            [snake.window :as window]
            [clojure.browser.event :as event]
            [goog.events.KeyHandler :as key-handler]
            [goog.events.KeyCodes :as key-codes])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def keyboard (goog.events.KeyHandler. js/document))
(def keyboard-chan (chan (sliding-buffer 1)))

(def directions {key-codes/UP [0 -1]
                 key-codes/RIGHT [1 0]
                 key-codes/DOWN [0 1]
                 key-codes/LEFT [-1 0]})
(def opposites {key-codes/DOWN key-codes/UP
                key-codes/LEFT key-codes/RIGHT})

(defn- random-coords [height width]
  [(rand-nth (range width))
   (rand-nth (range height))])

(defn- generate-random-fruit [env]
  (let [[height width] (map deref (env :dimensions))]
    (repeatedly 3 #(random-coords height width))))

(defn- push-key [key]
  (let [key-number (.-keyCode key)]
    (when (directions key-number)
      (go (>! keyboard-chan key-number)))))
  
(defn- keyboard-listen []
  (event/listen keyboard "key" push-key))
                                    
(defn- adjust-coords [env]
  (let [coords (env :coords)
        [x y] (first coords)
        direction (env :direction)]
    (assoc env :coords
           (cons (vec (apply map + (list (first coords) (directions direction))))
                 (take (dec (env :length)) coords)))))

(defn- valid-direction? [current-direction next-direction]
  (every? false? (map #(= (% current-direction) next-direction)
                      [opposites (map-invert opposites)])))

(defn- adjust-direction [env]
  (if (valid-direction? (env :direction) (env :next-direction))
    (assoc env :direction (env :next-direction))
    env))

(defn- fruit-collision-check [env]
  (let [fruit-collisions 
        (intersection (set (env :coords)) (set (env :fruit)))]
    (if-not (empty? fruit-collisions)
      (merge env {:length (inc (env :length))
                  :fruit (remove fruit-collisions (env :fruit))})
      env)))

(defn- boundary-check [env]
  (let [[x y] (first (env :coords))
        [height width] (map deref (env :dimensions))]
    (if (or (or (> y height) (< y 0))
            (or (> x width) (< x 0)))
      (assoc env :game-over "Out of bounds")
      env)))

(defn- snake-collision-check [env]
  (if (some #(> % 1) (vals (frequencies (env :coords))))
    (assoc env :game-over "Snake collision")
    env))

(defn- level-up [env]
  (if (= (count (env :fruit)) 0)
    (merge env {:fruit (generate-random-fruit env)
                :level (inc (env :level))
                :timer (/ (env :timer) 2)})
    env))

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
       
(defn- init-env [env]
  (let [[height width] (map deref (env :dimensions))]
    (merge env {:coords [(random-coords height width)]
                :fruit (generate-random-fruit env)
                :length 1
                :timer 300
                :level 1})))
           
(defn ^:export init []
  (let [draw (chan)
        env (snake.window/init draw)]
    (keyboard-listen)
    (game-loop draw (init-env env))))
