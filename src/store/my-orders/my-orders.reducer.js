import { MY_ORDERS_ACTION_TYPES } from "./my-orders.types";

const MY_ORDERS_INITIAL_STATE = {
  my_orders: [],
  isLoading: false,
  error: null,
};

export const myOrdersReducer = (state = MY_ORDERS_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MY_ORDERS_ACTION_TYPES.SET_MY_ORDERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case MY_ORDERS_ACTION_TYPES.SET_MY_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        my_orders: payload,
      };
    case MY_ORDERS_ACTION_TYPES.SET_MY_ORDERS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
