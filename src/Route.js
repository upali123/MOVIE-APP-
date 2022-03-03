import React from "react";


import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieListHeading from "./components/MovieListHeading";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MovieListHeading}/>
      <Route path="/app" component={MovieListHeading} />
    </Switch>
  </BrowserRouter>
);

export default Routes;