import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Appbar from "./layout/Appbar";

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
  let profile = localStorage.getItem("profile");
  //@ts-ignore
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
          <span className={classes.name}>{profile.firstName}</span>
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
