import { createAction } from "../../utils/reducer/reducer.util";
import { USER_ACTION_TYPES } from "./user.types";

// CHECK_USER_SESSION_START: "user/CHECK_USER_SESSION_START",
// CHECK_USER_SESSION_SUCCESS: "user/CHECK_USER_SESSION_SUCCESS",
// CHECK_USER_SESSION_FAILED: "user/CHECK_USER_SESSION_FAILED",
export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const checkUserSessionStart = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION_START);
export const checkUserSessionSuccess = (user) =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION_SUCCESS, user);
export const checkUserSessionFailed = (error) =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION_FAILED, error);
export const userSignOutStart = () =>
  createAction(USER_ACTION_TYPES.USER_SIGNOUT_START);
export const userSignOutSuccess = () =>
  createAction(USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS);
export const userSignOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.USER_SIGNOUT_FAILED, error);

export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
export const googleSignInSuccess = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_SUCCESS);
export const googleSignInFailed = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_FAILED);
