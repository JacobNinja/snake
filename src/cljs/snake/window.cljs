(ns snake.window
  (:require [cljs.core.async :as async
             :refer [>! <! chan timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def canvas (.getElementById js/document "world"))
(def context (.getContext canvas "2d"))
(def cell-size 30)
(def width (atom nil))
(def height (atom nil))
(def empty-cell-color "#eee")
(def border-color "#cdcdcd")
(def snake-cell-color "666")
(def fruit-cell-color "#cc0000")

(defn- fill-square [x y color]
  (set! (.-fillStyle context) color)
  (set! (.-strokeStyle context) border-color)
  (.fillRect context
             (* x cell-size)
             (* y cell-size)
             cell-size
             cell-size)
  (.strokeRect context
               (* x cell-size)
               (* y cell-size)
               cell-size
               cell-size))

(defn- fill-empty []
  (doseq [y (range @height)
          x (range @width)]
    (fill-square x y empty-cell-color)))

(defn- draw-snake-loop [draw]
  (go
   (loop []
     (let [env (<! draw)]
       (fill-empty)
       (doseq [[x y] (env :fruit)]
         (fill-square x y fruit-cell-color))
       (doseq [[x y] (env :coords)]
         (fill-square x y snake-cell-color)))
     (recur))))

(defn- init-window [draw]
  (set! (.-width canvas) (.-innerWidth js/window))
  (set! (.-height canvas) (.-innerHeight js/window))
  (reset! width (/ (.-width canvas) cell-size))
  (reset! height (/ (.-height canvas) cell-size))
  (draw-snake-loop draw))
  
(defn init [draw-chan]
  (init-window draw-chan)
  (set! (.-onresize js/window) #(init-window draw-chan))
  {:dimensions [height width]})

