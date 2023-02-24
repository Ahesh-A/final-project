import { PRODUCT_OVERVIEW_ACTION_TYPES } from "./product-overview.types";

const INITIAL_STATE = {
  product: {},
  color: "",
  imageUrl: "",
  size:"",
  
};

export const productOverViewReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_OVERVIEW_ACTION_TYPES.SET_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    case PRODUCT_OVERVIEW_ACTION_TYPES.SET_COLOR: {
      return {
        ...state,
        color: payload,
      };
    }
    case PRODUCT_OVERVIEW_ACTION_TYPES.SET_IMAGEURL: {
      return {
        ...state,
        imageUrl: payload,
      };
    }
    default:
      return state;
  }
};
