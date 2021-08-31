import { Profile, Email } from "../../model/userModel";

export type profileR = {
  profile: Profile | null;
  loading: boolean;
};
export type emailR = {
  email: Email | null;
  loading: boolean;
};
