import { PRODUCT_ACTION_TYPES } from "./products.types";

const INITIAL_STATE = {
  products: {},
  isLoading: false,
  error: null,
};

export const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    // case PRODUCT_ACTION_TYPES.SET_PRODUCTS:
    //   return {
    //     ...payload,
    //   };
    case PRODUCT_ACTION_TYPES.SET_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_ACTION_TYPES.SET_PRODUCTS_SUCCESS:
      return {
        products: payload,
        isLoading: false,
      };
    case PRODUCT_ACTION_TYPES.SET_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    default:
      return state;
  }
};
