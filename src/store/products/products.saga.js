import { put, call, all, takeLatest } from "redux-saga/effects";
import { PRODUCT_ACTION_TYPES } from "./products.types";
import { getData, getProdInfo } from "../../utils/firebase.utils";
import { setProductsFailed, setProductsSuccess } from "./products.action";
import { setTrendingItems } from "../trending-item/trending-item.action";
import { addAdditionalSuccess } from "../additional-info/additional-info.action";
import { setBestSeller } from "../best-seller/best-seller.action";
import { setTopViewedProductsSuccess } from "../top-viewed/top-viewed.action";
import { setOnSaleProductsSuccess } from "../onsale/onsale.action.js";
import { getCurrentUser, getMyOrders } from "../../utils/firebase.utils";
export function* onSale(data) {
  yield put(
    setOnSaleProductsSuccess(
      data.sort((a, b) => b.discount - a.discount).slice(0, 3)
    )
  );
}
export function* topViewed(data) {
  yield put(
    setTopViewedProductsSuccess(
      data.sort((a, b) => b.view_count - a.view_count).slice(0, 3)
    )
  );
}

export function* trendingItems(data) {
  yield put(
    setTrendingItems(
      data
        .sort((a, b) => new Date(b.init_date) - new Date(a.init_date))
        .slice(0, 8)
    )
  );
}
// export function* combineProducts(data, additionalInfo) {

export function* myOrders() {
  const user = yield call(getCurrentUser);
  const{uid} = user;
  console.log("user in product saga ----------------> ", user);
  const res = getMyOrders(uid);
  console.log(res);
}

// }
export function* bestSeller(data) {
  yield put(
    setBestSeller(data.sort((a, b) => b.units_sold - a.units_sold).slice(0, 3))
  );
}
export function* setProduct() {
  // let productArray = []
  try {
    const productList = yield call(getData);
    const additionalInfo = yield call(getProdInfo);

    yield put(addAdditionalSuccess(additionalInfo));

    const data = productList.reduce((acc, item) => {
      const { title, products } = item;
      const modifiedProducts = products.reduce((a, i) => {
        const addInfo = additionalInfo.find((prod) => prod.id === i.id);
        a.push({ ...i, ...addInfo });
        return a;
      }, []);
      acc[title.toLowerCase()] = modifiedProducts;
      return acc;
    }, {});

    console.log("modified_data: ", data);

    const productArray = [];
    Object.values(data).forEach((category) => {
      category.forEach((product) => {
        productArray.push(product);
      });
    });

    yield put(setProductsSuccess(data));
    yield call(bestSeller, productArray);
    yield call(trendingItems, productArray);
    yield call(topViewed, productArray);
    yield call(onSale, productArray);
    yield call(myOrders);
  } catch (error) {
    yield put(setProductsFailed(error));
  }
}
export function* onSetProductStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.SET_PRODUCTS_START, setProduct);
}

export function* productSaga() {
  yield all([call(onSetProductStart)]);
}
