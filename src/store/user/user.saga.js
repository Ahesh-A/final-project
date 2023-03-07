import { USER_ACTION_TYPES } from "./user.types.js";
import { googleSignIn } from "../../utils/firebase.utils";
import { call, all, put, takeLatest } from "redux-saga/effects";
import { getCurrentUser } from "../../utils/firebase.utils.js";
import {
  checkUserSessionFailed,
  checkUserSessionSuccess,
} from "./user.action.js";
import { getUsers, googleSignOut } from "../../utils/firebase.utils.js";
import { userSignOutSuccess, userSignOutFailed } from "./user.action.js";
export function* checkUserSession() {
  try {
    const user = yield call(getCurrentUser);
    if (user) {
      const { uid } = user;
      console.log("The user is :", uid);
      const users = yield call(getUsers);
      const res = Object.values(users).find((user) => user.uid === uid);
      yield put(checkUserSessionSuccess(res));
      console.log(user);
    }
  } catch (error) {
    yield put(checkUserSessionFailed(error));
  }
}
export function* signOut() {
  try {
    yield call(googleSignOut);
    yield put(userSignOutSuccess());
  } catch (error) {
    yield put(userSignOutFailed());
  }
}
export function* signInWithGoogle() {
  try {
    yield call(googleSignIn);
    yield call (checkUserSession);
  } catch (error) {
    yield put();
  }
}
export function* oncheckUserSession() {
  yield takeLatest(
    USER_ACTION_TYPES.CHECK_USER_SESSION_START,
    checkUserSession
  );
}
export function* onUserSignOut() {
  yield takeLatest(USER_ACTION_TYPES.USER_SIGNOUT_START, signOut);
}
export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* userSaga() {
  yield all([
    call(oncheckUserSession),
    call(onUserSignOut),
    call(onGoogleSignInStart),
  ]);
}
