import { ON_SALE_ACTION_TYPES } from "./onsale.types";
const ON_SALE_INITIAL_STATE = {
  products: [],
  error: null,
  isLoading: false,
};

export const onSaleReducer = (state = ON_SALE_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ON_SALE_ACTION_TYPES.ON_SALE_START:
      return {
        ...state,
        isLoading: true,
      };
    case ON_SALE_ACTION_TYPES.ON_SALE_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      };
    case ON_SALE_ACTION_TYPES.ON_SALE_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
