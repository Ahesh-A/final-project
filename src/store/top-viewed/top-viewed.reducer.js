import { TOP_VIEWED_ACTION_TYPES } from "./top-viewed.type";

const TOP_VIEWED_INITIAL_STATE = {
  products: [],
  error: null,
  isLoading: false,
};

export const topViewedReducer = (state = TOP_VIEWED_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOP_VIEWED_ACTION_TYPES.TOP_VIEWED_START:
      return {
        ...state,
        isLoading: true,
      };
    case TOP_VIEWED_ACTION_TYPES.TOP_VIEWED_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      };
    case TOP_VIEWED_ACTION_TYPES.TOP_VIEWED_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
