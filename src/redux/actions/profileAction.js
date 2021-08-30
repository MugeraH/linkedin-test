import axios from "axios";
import { GET_PROFILE } from "./actionType";

let base_url = "https://ti-react-test.herokuapp.com/users";

export const loadUsers = () => async (dispatch) => {
  const userProfile = await axios.get(base_url);
  dispatch({
    type: GET_PROFILE,
    payload: {
      userProfile: userProfile.data,
    },
  });
};
