import { put, call,all, takeLatest } from "redux-saga/effects";
import { PRODUCT_ACTION_TYPES } from "./products.types";
import { getData, getProdInfo} from "../../utils/firebase.utils";
import { setProductsFailed, setProductsSuccess } from "./products.action";
export function* setProduct() {
  try {
    const productList = yield call(getData);
    //  const prodSnap = yield call(getProdInfo) ;
    //  console.log(prodSnap);
    
    const data = productList.reduce((acc, item) => {
      const { title, products } = item;  
      
      acc[title.toLowerCase()] = products;
      return acc;
    }, {});
    // console.log(data);
    yield put(setProductsSuccess(data));
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

// useEffect(() => {
//   const getProducts = async () => {
//     const productList = await getData();
//     const data = productList.reduce((acc, item) => {
//       const { title, products } = item;
//       acc[title.toLowerCase()] = products;
//       return acc;
//     }, {});
//     dispatch(setProducts(data));
//   };
//   getProducts();
// }, [dispatch]);
