import { SIGN_IN_ACTION_TYPES } from "./sign-in.types";

const INITIAL_STATE = {
  email: null,
  password: null,
};

export const signInReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_ACTION_TYPES.SET_EMAIL:
      return {
        ...state,
        email: payload
      };

    case SIGN_IN_ACTION_TYPES.SET_PASSWORD:
      return {
        ...state,
        password: payload
      };

    default:
      return state;
  }
};
