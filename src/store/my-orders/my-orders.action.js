import { createAction } from "../../utils/reducer/reducer.util";

import { MY_ORDERS_ACTION_TYPES } from "./my-orders.types";

export const setMyOrdersStart = () =>
  createAction(MY_ORDERS_ACTION_TYPES.SET_MY_ORDERS_START);

export const setMyOrdersFalied = (error) =>
  createAction(MY_ORDERS_ACTION_TYPES.SET_MY_ORDERS_FAILED, error);

export const setMyOrdersSuccess = (myOrderedproducts) =>
  createAction(MY_ORDERS_ACTION_TYPES.SET_MY_ORDERS_SUCCESS, myOrderedproducts);
