(ns snake.core
  (:require [cljs.core.async :as async
             :refer [<! >! chan timeout alts!]]
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
                 (rest coords)))))

(defn- adjust-direction [[next-direction chan] env]
  (assoc env :direction
         (if (= chan keyboard-chan)
           next-direction
           (env :direction))))

(defn- game-loop [snake env]
  (go
   (>! snake (env :coords))
   (loop [env (assoc env :direction (<! keyboard-chan))]
     (>! snake (env :coords))
     (<! (timeout 300))
     (let [keyboard-check (alts! [keyboard-chan (timeout 1)])]
       (recur (->> env
                   (adjust-direction keyboard-check)
                   adjust-coords))))))
       
(defn- init-env [env]
  (let [[height width] (map deref (env :dimensions))]
    (assoc env :coords [(random-coords height width)])))
           
(defn ^:export init []
  (let [snake (chan)
        env (snake.window/init snake)]
    (keyboard-listen)
    (game-loop snake (init-env env))))
