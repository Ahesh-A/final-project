import { BEST_SELLER_SCTION_TYPES } from "./best-seller.types";

const BEST_SELLER_INITIAL_STATE = {
  products: null,
};

export const bestSellerReducer = (
  state = BEST_SELLER_INITIAL_STATE,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case BEST_SELLER_SCTION_TYPES.SET_BEST_SELLER:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
