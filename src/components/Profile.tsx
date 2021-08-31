import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Appbar from "./layout/Appbar";
import { useSelector, RootStateOrAny } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    height: "100vh",
    width: "100%",
    paddingTop: theme.spacing(12),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profile_pic: {
    marginTop: theme.spacing(4),
    background: "pink",
    height: "200px",
    width: "200px",
    borderRadius: "50%",
  },
  names: {
    marginTop: theme.spacing(4),
  },
  name: {
    marginRight: "10px",
  },
}));

function Profile() {
  const classes = useStyles();

  const { profile } = useSelector((state?: RootStateOrAny) => state.profile);
  console.log(profile);

  return (
    <div>
      <Appbar />
      <Container className={classes.container}>
        <Typography variant="h4">Profile</Typography>
        <div className={classes.profile_pic}>
          <img src="" alt="" />
        </div>

        <div className={classes.names}>
          {/* @ts-ignore */}
          <span className={classes.name}>Hughes</span>
          <span>Mugera</span>
        </div>

        <div className={classes.names}>
          <span>Mugerahughes@gmail.com</span>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
