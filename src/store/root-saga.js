import { call, all } from "redux-saga/effects";
import { userSaga } from "./user/user.saga";
import { productSaga } from "./products/products.saga.js";
import { favouritesSaga } from "./favourites/favourites.saga";
import { addInfoSaga } from "./additional-info/additional-info.saga";
import { topViewedSaga } from "./top-viewed/top-viewed.saga";
import { myOrdersSaga } from "./my-orders/my-orders.saga";
export function* rootSaga() {
  yield all([
    call(userSaga),
    call(productSaga),
    call(favouritesSaga),
    call(addInfoSaga),
    call(topViewedSaga),
    call(myOrdersSaga),
  ]);
  //yield all([call(userSaga), call(productSaga), call(favouritesSaga)]);
}
