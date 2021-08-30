import React, { useEffect } from "react";
import Loader from "./layout/Loader";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
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
      // console.log(code);

      let sendCode = async (code: string) => {
        let res = await axios.post("http://localhost:5008/profile/token", {
          code: code,
        });
        // console.log(res.data);
        let accessToken = res.data.access_token;

        await axios
          .post("http://localhost:5008/profile/user", {
            token: accessToken,
          })
          .then((response) => {
            // console.log(response.data);
            history.push("/profile");
            localStorage.setItem("profile", JSON.stringify(response.data));
            return response.data;
          })
          .catch((err) => {
            console.log(err);
          });
      };

      sendCode(code);
    }
  }, [history]);

  return (
    <div>
      <Loader />
    </div>
  );
}

export default Home;
