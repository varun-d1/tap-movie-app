import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/add">
        <AddMovie />
      </Route>
    </Switch>
  );
}

export default Router;
