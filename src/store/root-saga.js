import { call, all } from "redux-saga/effects";
import { userSaga } from "./user/user.saga";
import {productSaga} from "./products/products.saga.js"
export function* rootSaga() {
  yield all([call(userSaga), call(productSaga)]);
}
