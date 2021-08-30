import React from "react";


import "./App.css";

import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";

function App() {


 
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/home" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
