import { createAction } from "../../utils/reducer/reducer.util";
import { ON_SALE_ACTION_TYPES } from "./onsale.types";

export const setOnSaleProductsSuccess = (products) => createAction(ON_SALE_ACTION_TYPES.ON_SALE_SUCCESS, products);
