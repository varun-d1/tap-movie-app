import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import MovieDetail from "./pages/MovieDetail";
import UpdateMovie from "./pages/UpdateMovie";
function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/add" component={AddMovie}/>
      <Route exact path="/detail/:imdbId" component={MovieDetail} />
      <Route exact path="/update/:imdbId" component={UpdateMovie
      } />
    </Switch>
  );
}

export default Router;
