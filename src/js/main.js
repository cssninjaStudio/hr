"use strict";

//Alpine JS and plugins import
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";

window.Alpine = Alpine;
//Init intersect plugin
Alpine.plugin(intersect);
//Init persist plugin
Alpine.plugin(persist)
//Init store
Alpine.store('app', {
  init() {
    this.on = window.matchMedia('(prefers-color-scheme: dark)').matches
  },
  isDark: Alpine.$persist(false),
})
//Start Alpine JS
Alpine.start();

import "./libs/components";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    //App init
  }
};
