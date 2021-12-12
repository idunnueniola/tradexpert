import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import GetStarted from "./GetStarted";
import Instant from "./Instant";
import Sell from "./Sell";
import Learn from "./Learn";
import Login from "./Login";
import Business from "./Business";
import Welcome from "./Welcome";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
<Route path="/Welcome">
  <Welcome/>
</Route>
        <Route path="/Instant">
          <Instant />
        </Route>
        <Route path="/Sell">
          <Sell />
        </Route>
        <Route path="/learn">
          <Learn />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/getstarted">
          <GetStarted />
        </Route>
        <Route path="/Business">
          <Business />
        </Route>
        <Route path="/Instant">
          <Instant />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
