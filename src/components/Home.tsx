import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Appbar from "./layout/Appbar";
import Loader from "../assets/Rolling-1.6s-201px.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    height: "100vh",
    width: "100%",
    paddingTop: theme.spacing(15),
    textAlign: "center",
  },
  image: {
    height: "30px",
  },
}));

function Home() {


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
   };
   let url = window.location.href;
   let data = getAccessToken(url);
   // @ts-ignore
   console.log(data.code);

  const classes = useStyles();
  return (
    <div>
      <Appbar />

      <Container className={classes.container}>
        <Typography variant="h4">Welcome to home page</Typography>
        <img className={classes.image} src={Loader} alt="loader" />
      </Container>
    </div>
  );
}

export default Home;
