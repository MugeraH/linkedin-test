import { GET_PROFILE } from "../redux/actions/actionTypes";
import axios from "axios";

const get_profile = async (code: string, dispatch: Function) => {
  try {
    let res = await axios.post("http://localhost:5008/profile/token", {
      code: code,
    });

    let accessToken = res.data.access_token;
    // let email = await axios.post("", {
    //   token: accessToken,
    // });

    await axios
      .post("http://localhost:5008/profile/user", {
        token: accessToken,
      })
      .then((response) => {


        dispatch({
          type: GET_PROFILE,
          payload: response.data,
        });
       

        return response.data;
      });
  } catch (error) {
    console.log("error");
  }
};
const get_users_profile = () => {};

export { get_profile, get_users_profile };
