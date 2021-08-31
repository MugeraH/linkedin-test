import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import emailReducer from "./emailReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  email: emailReducer,
});

export default rootReducer;
