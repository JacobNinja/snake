(ns snake.macros)

(defmacro defhandler [name bindings & forms]
  (let [env-sym (gensym)
        value-bindings (map (fn [k] `(~env-sym (keyword '~k))) bindings)]
    `(defn ~name [~env-sym]
       (let [~@(interleave bindings value-bindings)]
         (merge ~env-sym ~@forms)))))
