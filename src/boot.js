import 'babel/polyfill';
import 'babel-core/polyfill'; 
require("./assets/styles/main.less");
require('es5-shim/es5-shim');
require('es5-shim/es5-sham');

import React from "react";
import Router from "react-router";
import MasterRoutes from "./js/routes.jsx";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

if (typeof(document) !== "undefined" && window) {

  Router
  .create({
    routes: MasterRoutes,
    // location: Router.HistoryLocation,
    scrollBehavior: Router.ScrollToTopBehavior
  })
  .run((Handler, state) => {
      React.render(<Handler {...state}/>, document.getElementById("app"));
  });
}
