(ns snake.core
  (:require [cljs.core.async :as async
             :refer [<! >! chan timeout alts! dropping-buffer]]
            [snake.window :as window]
            [clojure.browser.event :as event]
            [goog.events.KeyHandler :as key-handler]
            [goog.events.KeyCodes :as key-codes])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def keyboard (goog.events.KeyHandler. js/document))
(def keyboard-chan (chan 1))

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
                                    
(defn- adjust-coords [keyboard-input [x y]]
  (cond
   (= keyboard-input key-codes/UP) [x (dec y)]
   (= keyboard-input key-codes/RIGHT) [(inc x) y]
   (= keyboard-input key-codes/DOWN) [x (inc y)]
   (= keyboard-input key-codes/LEFT) [(dec x) y]))

(defn- game-loop [snake [initial-x initial-y]]
    (go
     (>! snake [[initial-x initial-y]])
     (loop [x initial-x
            y initial-y
            direction (<! keyboard-chan)]
       (let [[next-x next-y] (adjust-coords direction [x y])]
         (>! snake [[next-x next-y]])
         (<! (timeout 300))
         (recur next-x next-y 
                (let [[val chan] (alts! [keyboard-chan (timeout 1)])]
                  (if (= chan keyboard-chan)
                    val
                    direction)))))))

(defn ^:export init []
  (let [snake (chan)]
    (keyboard-listen)
    (game-loop snake (snake.window/init snake))))
