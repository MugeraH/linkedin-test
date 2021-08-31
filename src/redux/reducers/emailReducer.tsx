import { GET_EMAIL } from "../actions/actionTypes";
import { profileAction } from "../actions/profile";

import { emailR } from "./types";

const initialState: emailR = {
  email: null,
  loading: false,
};

const emailReducer = (state = initialState, action: profileAction): emailR => {
  const { type, payload } = action;
  switch (type) {
    case GET_EMAIL:
      return {
        ...state,
        email: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default emailReducer;
