import { call, put, all, takeLatest } from "redux-saga/effects";
import { ADDITIONAL_INFO_ACTION_TYPES } from "./additional-info.types";
import { getProdInfo } from "../../utils/firebase.utils";
import {
  addAdditionalFalied,
  addAdditionalSuccess,
} from "./additional-info.action";

export function* addInfo() {
  try {
     const additionalInfo = yield call(getProdInfo);
   yield put(addAdditionalSuccess(additionalInfo));
    console.log('in add ingo');
  } catch (error) {
    yield put(addAdditionalFalied(error));
  }
}

export function* onAddInfoStart() {
  yield takeLatest(ADDITIONAL_INFO_ACTION_TYPES.SET_ADD_INFO_START, addInfo);
}
export function* addInfoSaga() {
  yield all([call(onAddInfoStart)]);
}
