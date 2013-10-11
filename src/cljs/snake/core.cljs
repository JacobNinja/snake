(ns snake.core
  (:require [cljs.core.async :as async
             :refer [<! >! chan timeout alts!]]
            [snake.window :as window]
            [clojure.browser.event :as event]
            [goog.events.KeyHandler :as key-handler]
            [goog.events.KeyCodes :as key-codes])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def keyboard (goog.events.KeyHandler. js/document))
(def keyboard-chan (chan))

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
  (event/listen keyboard "key" push-key))
                                    
(defn- adjust-coords [keyboard-input [x y]]
  (cond
   (= keyboard-input key-codes/UP) [x (dec y)]
   (= keyboard-input key-codes/RIGHT) [(inc x) y]
   (= keyboard-input key-codes/DOWN) [x (inc y)]
   (= keyboard-input key-codes/LEFT) [(dec x) y]))

(defn game-loop [snake [x y]]
    (go
     (>! snake [[x y]])
     (loop [x x
            y y]
       (>! snake [[x y]])
       (let [[val chan] (alts! [snake keyboard-chan])]
         (if (= chan keyboard-chan)
           (let [[new-x new-y] (adjust-coords val [x y])]
             (recur new-x new-y))
           (recur (dec x) y))))))


(defn ^:export init []
  (let [snake (chan)
        coords (snake.window/init snake)]
    (keyboard-listen)
    (game-loop snake (snake.window/init snake))))
