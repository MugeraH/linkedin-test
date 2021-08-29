import { Typography,Card } from "@material-ui/core";
import React from "react";

import Linkedin from "./Linkedin";


function Welcome() {
  return (
    <div>
      <Card className="card">
        <Typography className="intro" variant="h5">
          {" "}
          Welcome To TestLinked
        </Typography>
        <Typography className="intro-text" variant="h6">
          {" "}
          Signin to get started
        </Typography>

        <Linkedin />
      </Card>
    </div>
  );
}

export default Welcome;
