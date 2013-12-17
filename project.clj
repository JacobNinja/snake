(defproject snake "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/core.async "0.1.242.0-44b1e3-alpha"]
                 [org.clojure/clojurescript "0.0-2080"]
                 [compojure "1.1.5"]
                 [hiccup "1.0.3"]]
  :source-paths ["src/clj"]
  :plugins [[lein-cljsbuild "1.0.0"]
            [lein-ring "0.8.5"]]
  :ring {:handler snake.core/app}
  :cljsbuild {:builds
              {:dev
               {:source-paths ["src/cljs"]
                :compiler {:output-dir "resources/public/js"
                           :output-to "resources/public/js/dev.js"
                           :source-map true
                           :source-map-path "js"
                           :optimizations :none
                           :pretty-print true}}
               :prod
                {:source-paths ["src/cljs"]
                 :compiler {:output-to "resources/public/js/prod.js"
                            :optimizations :advanced}}}})
