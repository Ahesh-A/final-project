import { SEARCH_PRODUCT_TYPES } from "./search-product.types";

const SET_PRODUCT_INITIAL_STATE = {
  searchProducts: [],

  searchString: "",
};
export const searchProductReducer = (
  state = SET_PRODUCT_INITIAL_STATE,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_PRODUCT_TYPES.SET_SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: payload,
      };
    case SEARCH_PRODUCT_TYPES.SET_SEARCH_STRING:
      return {
        ...state,
        searchString: payload,
      };
    default:
      return state;
  }
};
