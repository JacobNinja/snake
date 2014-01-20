(ns snake.core
  (:use [compojure.core]
        [hiccup.core])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :refer [header]]
            [clojure.data.json :as json]
            [clojure.string :as string]))

(def dev
  (vector
   [:script {:src "js/out/goog/base.js"}]
   [:script {:src "js/dev.js"}]
   [:script "goog.require('snake.core');"]))

(def prod
  [[:script {:src "js/prod.js"}]])

(defn page-for [scripts]
  (html [:head {:title "Snake"}
         [:link {:rel "stylesheet" :href "css/style.css"}]]
        (vec (concat
              [:body {:onload "snake.core.init();"}
               [:div
                [:div
                 "Level: " [:span {:id "level"} "1"]
                 (repeat 5 "&nbsp;")
                 "Frame: " [:span {:id "frame"} "1"]
                 [:canvas#world {:width 400 :height 400}]]]]
              scripts))))

(defroutes app-routes
  (GET "/" []
       (page-for prod))
  (GET "/dev" []
       (page-for dev))
  (route/resources "/")
  (route/not-found "Not found"))

(def app (handler/site app-routes))
