import { ON_SALE_ACTION_TYPES } from "./onsale.types";
const ON_SALE_INITIAL_STATE = {
  products: [],
};

export const onSaleReducer = (state = ON_SALE_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
   
    case ON_SALE_ACTION_TYPES.ON_SALE_SUCCESS:
      return {
        ...state,
        products: payload,
        
      };

    default:
      return state;
  }
};
