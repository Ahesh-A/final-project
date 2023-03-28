
import { TRENDING_ITEM_ACTION_TYPES } from "./trending-item.types";

const TRENDING_ITEMS_INITIAL_STATE = {
  products: null,
};
export const trendingItemsReducer = (
  state = TRENDING_ITEMS_INITIAL_STATE,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case TRENDING_ITEM_ACTION_TYPES.SET_TRENDING_ITEMS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
