import {call, all, takeLatest, put} from "redux-saga/effects";
import { TOP_VIEWED_ACTION_TYPES } from "./top-viewed.type";
import { insertProdInfo } from "../../utils/firebase.utils";
import {  setTopViewedProductsFailed } from "./top-viewed.action";
export function* topViewed({payload}) {
    try {
        yield call(insertProdInfo, payload);
        console.log("  in top viewed",payload);

    } catch(error) {
        yield put (setTopViewedProductsFailed(error));
    }
    

}
export function* onTopViewed() {
    yield takeLatest(TOP_VIEWED_ACTION_TYPES.TOP_VIEWED_START, topViewed);
}

export function* topViewedSaga() {
    yield all([call(onTopViewed)])    
}
