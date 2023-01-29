import { PRODUCT_ACTION_TYPES } from "./products.types";

const INITIAL_STATE = {
  product: {},
};

export const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPES.SET_PRODUCTS:
      return {
        ...payload,
      };
    default:
      return state;
  }
};
