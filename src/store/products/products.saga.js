import { put, call, all, takeLatest } from "redux-saga/effects";
import { PRODUCT_ACTION_TYPES } from "./products.types";
import { getData, getProdInfo } from "../../utils/firebase.utils";
import { setProductsFailed, setProductsSuccess } from "./products.action";
import { setTrendingItems } from "../trending-item/trending-item.action";
import { addAdditionalSuccess } from "../additional-info/additional-info.action";
import { setBestSeller } from "../best-seller/best-seller.action";
import { setTopViewedProductsSuccess } from "../top-viewed/top-viewed.action";

export function* topViewed(data) {
  
  yield put(
    setTopViewedProductsSuccess(
      data.sort((a, b) => b.top_viewed - a.top_viewed).slice(0, 3)
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

export function* bestSeller(data) {
  // console.log(
  //   "in best seller ",
  //   data.sort((a, b) => b.units_sold - a.units_sold).slice(0, 4)
  // );
  yield put(
    setBestSeller(data.sort((a, b) => b.units_sold - a.units_sold).slice(0, 3))
  );
}
export function* setProduct() {
  try {
    const productList = yield call(getData);

    const additionalInfo = yield call(getProdInfo);
    yield put(addAdditionalSuccess(additionalInfo));
    console.log("in add ingo");

    const data = productList.reduce((acc, item) => {
      const { title, products } = item;

      acc[title.toLowerCase()] = products;
      return acc;
    }, {});
    console.log(data);
    // let wholeProducts = [];
    yield call(() => {
      if (data && additionalInfo) {
        Object.values(data).forEach((category) => {
          category.forEach((product) => {
            const addInfo = additionalInfo.find(
              (prod) => prod.id === product.id
            );
            product = { ...product, ...addInfo };
            //wholeProducts.push(product);
          });
        });
      }
    });
    yield put(setProductsSuccess(data));

    const productArray = [];
    Object.values(data).forEach((category) => {
      category.forEach((product) => {
        productArray.push(product);
      });
    });

    yield call(bestSeller, productArray);
    yield call(trendingItems, productArray);
    yield call(topViewed, productArray);
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
