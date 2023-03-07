import { createAction } from "../../utils/reducer/reducer.util";
import { PRODUCT_ACTION_TYPES } from "./products.types";

// SET_PRODUCTS_START: "products/SET_PRODUCTS_START",
// SET_PRODUCTS_SUCCESS:"products/SET_PRODUCTS_SUCCESS",
// SET_PRODUCTS_FAILED: "products/SET_PRODUCTS_FAILED"

// export const setProducts = (products) =>
//   createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, products);

export const setProductsStart = () =>
  createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS_START);
export const setProductsSuccess = (products) =>
  createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS_SUCCESS, products);
export const setProductsFailed = (error) =>
  createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS_FAILED, error);
