import React, { ReactElement } from "react";
import load from "../../assets/Bars-1.1s-227px.svg";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    height: "100vh",
    width: "100%",
    paddingTop: theme.spacing(30),
    textAlign: "center",
  },
  image: {
    height: "150px",
  },
}));

function Loader(): ReactElement {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <img className={classes.image} src={load} alt="loader" />
      <h4 className="loading">loading</h4>
    </Container>
  );
}

export default Loader;
