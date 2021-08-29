import React from "react";


import "./App.css";

import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

function App() {


 
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
