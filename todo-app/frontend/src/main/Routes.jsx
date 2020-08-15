import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Todo from "../todo/Todo";
import About from "../about/About";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/todo" component={Todo} />
    <Route path="/about" component={About} />
    <Route from="*" to="/todo" />
  </Router>
);
