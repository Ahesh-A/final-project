
import { createAction } from "../../utils/reducer/reducer.util";
import { PRODUCT_ACTION_TYPES } from "./products.types";
export const setProducts = (products) => createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, products);