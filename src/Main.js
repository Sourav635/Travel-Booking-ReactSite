import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Board from "./Board";
import Tourpack from "./Tourpack";
import Demo from "./Demo";
import Shopping from "./Shopping";
import Web from "./Web";
import Cafe from "./Cafe";
import Bioskop from "./Bioskop";
const Main = () => (
  <main className="lead">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/tourpack" component={Tourpack} />
      <Route exact path="/board" component={Board} />
      <Route exact path="/video" component={Demo} />
      <Route exact path="/order" component={Shopping} />
      <Route exact path="/website" component={Web} />
      <Route exact path="/cafe" component={Cafe} />
      <Route exact path="/bioskop" component={Bioskop} />
    </Switch>
  </main>
);

export default Main;
