import { Profile } from "../../model/userModel";

export type profileR = {
  profile: Profile | null;
  loading: boolean;
};
