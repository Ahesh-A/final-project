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


  
    
// }
export function* bestSeller(data) {
  yield put(
    setBestSeller(data.sort((a, b) => b.units_sold - a.units_sold).slice(0, 3))
  );
}
export function* setProduct() {
  try {
    const productList = yield call(getData);
    const additionalInfo = yield call(getProdInfo);

    yield put(addAdditionalSuccess(additionalInfo));
    

    let  data = productList.reduce((acc, item) => {
      const { title, products } = item;

      acc[title.toLowerCase()] = products;
      return acc;
    }, {});
    
    // let wholeProducts = [];
    // yield call(() => {
    //   if (data && additionalInfo) {
    //     Object.values(data).forEach((category) => {
    //       category.forEach((product) => {
    //         const addInfo = additionalInfo.find(
    //           (prod) => prod.id === product.id
    //         );
    //         product = { ...product, ...addInfo };
    //         //wholeProducts.push(product);
    //       });
    //     });
    //   }
    // });
    // console.log(data);
    // if (data && additionalInfo) {
    //   console.log('in combine products');
    //   Object.values(data).forEach((category) => {
    //     category.forEach((product) => {
    //       const addInfo = additionalInfo.find(
    //         (prod) => prod.id === product.id
    //       );
    //       const {info} = addInfo;
    //       console.log({...info, ...product});
    //       product = { ...product, ...info };
    //     });
    //   });
    //   console.log("modified_data", data);
    // }
    //  if (data && additionalInfo) {
    //   console.log('in combine products');
    //   Object.keys(data).forEach((category) => {
    //     data.category.forEach((product) => {
    //       let i = 0;
    //       const addInfo = additionalInfo.find(
    //         (prod) => prod.id === product.id
    //       );
    //       const {info} = addInfo;
    //       console.log({...info, ...product});
    //       data.category[i] = { ...product, ...info };
    //     });
    //   });
    //   console.log("modified_data", data);
    // }
    const productArray = [];
    Object.values(data).forEach((category) => {
      category.forEach((product) => {
        productArray.push(product);
      });
    });

    // yield call(combineProducts, data, additionalInfo);
    yield put(setProductsSuccess(data));
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
