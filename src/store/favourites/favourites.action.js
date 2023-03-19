import { FAVOURITES_ACTION_TYPES } from "./favourites.types";
import { createAction } from "../../utils/reducer/reducer.util";

export const setFavourites = (favourites) => createAction(FAVOURITES_ACTION_TYPES.SET_FAVOURITES, favourites);