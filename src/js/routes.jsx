/*eslint-disable no-unused-vars */

import React from "react";
import { Route, DefaultRoute, NotFoundRoute } from "react-router";

import Master from "./Master.jsx";
import Home from "./components/pages/Home.jsx";
import NotFound from "./components/pages/NotFound.jsx";
require('../assets/styles/main.less') ;

module.exports = (
  <Route path="/" handler={Master}>
    <DefaultRoute name="home" handler={Home} />
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

/*eslint-enable no-unused-vars */
