import React, { useState } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import "./App.css";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import logo from "./assets/linkedin.png";

function App() {
  const [state, setState] = useState(false);
  // let redirect_url = "http://localhost:3000";
  // let client_id = "774up8xbssfyp5";

  var getAuthToken = function (url: string) {
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
  };
  let url = window.location.href;
  let data = getAuthToken(url);
  // @ts-ignore
  console.log(data.code);

  return (
    <div className="App">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="container">
        <div className="link">
          <img src={logo} alt="linkedin logo" />

          <a
            href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=657575&scope=r_liteprofile%20r_emailaddress&client_id=774up8xbssfyp5&redirect_uri=
http%3A%2F%2Flocalhost%3A3000"
          >
            Linkedin
          </a>
        </div>
        {/* <Link
          className="btn btn-primary"
          to="https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=657575&scope=r_liteprofile%20r_emailaddress&client_id=774up8xbssfyp5redirect_uri=http%3A%2F%2Flocalhost%3A3000"
        >
          Linkedin
        </Link> */}
      </div>

      {state ? <h2>Connected</h2> : <h2> Not Connected</h2>}
    </div>
  );
}

export default App;
