import React, { useEffect } from "react";
import Loader from "./layout/Loader";

import { get_profile } from "../utils/utils";

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
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
  useEffect(() => {
    let url = window.location.href;
    let data = getAccessToken(url);
    // @ts-ignore
    let code = data.code;

    if (code) {
      get_profile(code, dispatch);

      history.push("/profile");
    }
  }, [history, dispatch]);

  return (
    <div>
      <Loader />
    </div>
  );
}

export default Home;
