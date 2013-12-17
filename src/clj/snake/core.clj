(ns snake.core
  (:use [compojure.core]
        [hiccup.core])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :refer [header]]
            [clojure.data.json :as json]
            [clojure.string :as string]))

(def js-bootstrap
  { "dev"  [[:script {:src "js/goog/base.js"}]
            [:script {:src "js/dev.js"}]
            [:script "goog.require('snake.core')"]]
   "prod" [[:script {:src "js/prod.js"}]] })

(defn scripts [env]
  (conj (js-bootstrap env) [:script "snake.core.init()"]))

(defn page-for [env]
  (html [:head {:title "Snake"}
         [:link {:rel "stylesheet" :href "css/style.css"}]]
        [:body
         (into [:div
                [:div
                 "Level: " [:span#level "1"]
                 [:canvas#world {:width 400 :height 400}]]]
               (scripts env))]))

(defroutes app-routes
  (GET "/" []
       (page-for "prod"))
  (GET "/dev" []
       (page-for "dev"))
  (route/resources "/")
  (route/not-found "Not found"))

(def app (handler/site app-routes))
