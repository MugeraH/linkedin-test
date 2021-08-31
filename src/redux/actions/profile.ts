import { GET_EMAIL, GET_PROFILE } from "./actionTypes";
import { Profile, Email } from "../../model/userModel";

interface profile {
  type: typeof GET_PROFILE;
  payload: Profile;
}
interface email {
  type: typeof GET_EMAIL;
  payload: Email;
}

export type profileActions = profile;

export type profileAction = email;
