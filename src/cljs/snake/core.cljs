(ns snake.core
  (:require [cljs.core.async :as async
             :refer [<! >! chan timeout alts!]]
            [clojure.set :refer [intersection]]
            [snake.window :as window]
            [clojure.browser.event :as event]
            [goog.events.KeyHandler :as key-handler]
            [goog.events.KeyCodes :as key-codes])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def keyboard (goog.events.KeyHandler. js/document))
(def keyboard-chan (chan 1))

(defn- random-coords [height width]
  [(rand-nth (range width))
   (rand-nth (range height))])

(defn- push-key [key]
  (let [key-number (.-keyCode key)
        valid-key (cond
                   (= key-number key-codes/UP) key-codes/UP
                   (= key-number key-codes/RIGHT) key-codes/RIGHT
                   (= key-number key-codes/DOWN) key-codes/DOWN
                   (= key-number key-codes/LEFT) key-codes/LEFT)]
    (when valid-key
      (go (>! keyboard-chan key-number)))))
  
(defn- keyboard-listen []
  (go (event/listen keyboard "key" push-key)))
                                    
(defn- adjust-coords [env]
  (let [coords (env :coords)
        [x y] (first coords)
        direction (env :direction)]
    (assoc env :coords
           (cons (cond
                  (= direction key-codes/UP) [x (dec y)]
                  (= direction key-codes/RIGHT) [(inc x) y]
                  (= direction key-codes/DOWN) [x (inc y)]
                  (= direction key-codes/LEFT) [(dec x) y])
                 (take (dec (env :length)) coords)))))

(defn- adjust-direction [[next-direction chan] env]
  (if (= chan keyboard-chan)
    (assoc env :direction next-direction)
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

(defn- game-loop [draw env]
  (go
   (>! draw env)
   (loop [env (assoc env :direction (<! keyboard-chan))]
     (>! draw env)
     (<! (timeout 300))
     (let [keyboard-check (alts! [keyboard-chan (timeout 1)])
           next-env (->> env
                         fruit-collision-check
                         (adjust-direction keyboard-check)
                         adjust-coords
                         boundary-check
                         snake-collision-check)]
       (if (env :game-over)
         (js/alert (str "Game over!" \newline (env :game-over)))
         (recur next-env))))))
       
(defn- init-env [env]
  (let [[height width] (map deref (env :dimensions))]
    (merge env {:coords [(random-coords height width)]
                :fruit (repeatedly 3 #(random-coords height width))
                :length 1})))
           
(defn ^:export init []
  (let [draw (chan)
        env (snake.window/init draw)]
    (keyboard-listen)
    (game-loop draw (init-env env))))
