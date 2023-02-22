import { PRODUCT_OVERVIEW_ACTION_TYPES } from "./product-overview.types";
import { createAction } from "../../utils/reducer/reducer.util";

export const setOverViewProduct = (product) => createAction(PRODUCT_OVERVIEW_ACTION_TYPES.SET_PRODUCT, product);
export const setOverViewColor = (color) => createAction(PRODUCT_OVERVIEW_ACTION_TYPES.SET_COLOR, color);
export const setOverViewImageUrl = (imageUrl) => createAction(PRODUCT_OVERVIEW_ACTION_TYPES.SET_IMAGEURL, imageUrl);

