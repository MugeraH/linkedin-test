import { GET_PROFILE } from "../actions/actionTypes";
import { profileActions } from "../actions/profile";

import { profileR } from "./types";

const initialState: profileR = {
  profile: null,
  loading: false,
};

const authReducer = (
  state = initialState,
  action: profileActions
): profileR => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
