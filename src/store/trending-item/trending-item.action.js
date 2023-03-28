import { createAction } from "../../utils/reducer/reducer.util";
import { TRENDING_ITEM_ACTION_TYPES } from "./trending-item.types";

export const setTrendingItems = (prodcuts) =>
  createAction(TRENDING_ITEM_ACTION_TYPES.SET_TRENDING_ITEMS, prodcuts);
