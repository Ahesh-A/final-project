import { createAction } from "../../utils/reducer/reducer.util";
import { SIGN_IN_ACTION_TYPES } from "./sign-in.types";

export const setEmail = (email) => {
  return createAction(SIGN_IN_ACTION_TYPES.SET_EMAIL, email);
};
export const setPassword = (password) => {
  return createAction(SIGN_IN_ACTION_TYPES.SET_PASSWORD, password);
};
