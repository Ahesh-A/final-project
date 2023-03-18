import { createAction } from "../../utils/reducer/reducer.util";
import { SEARCH_PRODUCT_TYPES } from "./search-product.types";

export const setSearchProducts = (products) =>
  createAction(SEARCH_PRODUCT_TYPES.SET_SEARCH_PRODUCTS, products);
export const setSearchString = (searchString) =>
  createAction(SEARCH_PRODUCT_TYPES.SET_SEARCH_STRING, searchString);
