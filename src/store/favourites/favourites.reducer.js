import { FAVOURITES_ACTION_TYPES } from "./favourites.types";

const FAVOURITS_INITIAL_STATE = {
  favourites: [],
};
export const favouritesReducer = (state = FAVOURITS_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FAVOURITES_ACTION_TYPES.SET_FAVOURITES:
      return {
        ...state,
        favourites: payload,
      };
    default:
      return state;
  }
};
