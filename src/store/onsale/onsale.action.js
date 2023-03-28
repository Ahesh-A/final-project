import { createAction } from "../../utils/reducer/reducer.util";
import { ON_SALE_ACTION_TYPES } from "./onsale.types";

export const setOnSaleProductsSuccess = (products) => createAction(ON_SALE_ACTION_TYPES.SET_ON_SALE_PRODUCTS, products);
export const setOnsaleProductsStart = (product) => createAction(ON_SALE_ACTION_TYPES.ON_SALE_START, product);
export const setOnSaleProductsFailed = (error) => createAction(ON_SALE_ACTION_TYPES.ON_SALE_FAILED, error);