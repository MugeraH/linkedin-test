import React from "react";
import Loader from "./layout/Loader";
import axios from "axios";

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
  let code = data.code;
  // @ts-ignore
  // localStorage.setItem("__linkedinAccessToken__", data.code);

  if (code) {
    let sendCode = async (code: string) => {
      let res = await axios.post("http://localhost:5008/profile/details", code);
      return res;
    };

    // console.log(sendCode);
  }

  return (
    <div>
      <Loader />
    </div>
  );
}

export default Home;
