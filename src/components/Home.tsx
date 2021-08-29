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
