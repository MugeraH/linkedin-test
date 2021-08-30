import { GET_PROFILE } from "./actionTypes";
import { Profile } from "../../model/userModel";

interface profile {
  type: typeof GET_PROFILE;
  payload: Profile;
}

export type profileActions = profile;
