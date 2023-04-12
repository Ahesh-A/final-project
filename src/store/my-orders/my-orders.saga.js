import { call, all, put, takeLatest } from "redux-saga/effects";
import { MY_ORDERS_ACTION_TYPES } from "./my-orders.types";
import { getMyOrders, getCurrentUser } from "../../utils/firebase.utils";
import { setMyOrdersSuccess, setMyOrdersFalied } from "./my-orders.action";
export function* myOrdersStart() {
  try {
    const allOrders = yield call(getMyOrders);
    const currUser = yield call(getCurrentUser);
    const { uid } = currUser;
    const filteredOrders = allOrders.filter((order) => order.uid === uid);

    console.log(filteredOrders);
    yield put(setMyOrdersSuccess(filteredOrders));
  } catch (error) {
    yield put(setMyOrdersFalied(error));
  }
}
export function* onMyOrdersStart() {
  yield takeLatest(MY_ORDERS_ACTION_TYPES.SET_MY_ORDERS_START, myOrdersStart);
}

export function* myOrdersSaga() {
  yield all([call(onMyOrdersStart)]);
}
