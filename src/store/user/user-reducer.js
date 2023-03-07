import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.CHECK_USER_SESSION_START:
    case USER_ACTION_TYPES.USER_SIGNOUT_START:
      case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.CHECK_USER_SESSION_SUCCESS:

      return {
        ...state,
        isLoading: false,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TYPES.CHECK_USER_SESSION_FAILED:
    case USER_ACTION_TYPES.USER_SIGNOUT_FAILED:
      case USER_ACTION_TYPES.GOOGLE_SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
