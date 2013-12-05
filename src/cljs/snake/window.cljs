(ns snake.window
  (:require [cljs.core.async :as async
             :refer [>! <! chan timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(def canvas (.getElementById js/document "world"))
(def context (.getContext canvas "2d"))
(def level (.getElementById js/document "level"))

(def cell-size 30)
(def level-offset 30)

(def width (atom nil))
(def height (atom nil))

(def empty-cell-color "#eee")
(def border-color "#cdcdcd")
(def snake-cell-color "666")
(def fruit-cell-color "#cc0000")

(defn- fit-to-screen [size]
  (- size (* (mod size cell-size)) 2))

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

(defn- set-level [num]
  (set! (.-textContent level) num))

(defn- fill [coll color]
  (doseq [[x y] coll]
    (fill-square x y color)))

(defn- draw-snake-loop [draw]
  (go-loop []
           (let [env (<! draw)
                 {:keys [level fruit coords]} env]
             (fill-empty)
             (set-level level)
             (fill fruit fruit-cell-color)
             (fill coords snake-cell-color))
           (recur)))

(defn- init-window [draw]
  (set! (.-width canvas) (fit-to-screen (.-innerWidth js/window)))
  (set! (.-height canvas) (- (fit-to-screen (.-innerHeight js/window)) level-offset))
  (reset! width (/ (.-width canvas) cell-size))
  (reset! height (/ (.-height canvas) cell-size))
  (draw-snake-loop draw))
  
(defn init [draw-chan]
  (init-window draw-chan)
  (set! (.-onresize js/window) #(init-window draw-chan))
  {:dimensions [height width]})

