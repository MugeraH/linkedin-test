import axios from "axios";
import { GET_PROFILE } from "./actionTypes";

let base_url = "https://ti-react-test.herokuapp.com/users";

export const loadUsers =
  () =>
  async (
    dispatch: (arg0: { type: string; payload: { userProfile: any } }) => void
  ) => {
    const userProfile = await axios.get(base_url);
    dispatch({
      type: GET_PROFILE,
      payload: {
        userProfile: userProfile.data,
      },
    });
  };
