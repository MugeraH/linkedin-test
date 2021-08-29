import React, { useState } from "react";
import axios from "axios";

import "./App.css";
import Linkedin from "./components/Linkedin";
import { Typography, Card } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

function App() {
  const [state, setState] = useState(false);

  var getAccessToken = function (url: string) {
    var params = {};
    (url + "?")
      .split("?")[1]
      .split("&")
      .forEach(function (pair) {
        //@ts-ignore
        pair = (pair + "=").split("=").map(decodeURIComponent);
        if (pair[0].length) {
          //@ts-ignore
          params[pair[0]] = pair[1];
        }
      });

    return params;

    // if (Object.keys(params).length !== 0) {
    //   //@ts-ignore
    //   var code = params?.code;

    //   let funct = async () => {
    //     let res = await axios.post(
    //       `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=774up8xbssfyp5&client_secret=LEPAHZBDY4Xm4xaY&redirect_uri=http://localhost:3000&code=${code}`
    //     );

    //     console.log(res);
    //     return res;
    //   };

    //   funct();
    // }
  };
  let url = window.location.href;
  let data = getAccessToken(url);
  // @ts-ignore
  console.log(data.code);

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
