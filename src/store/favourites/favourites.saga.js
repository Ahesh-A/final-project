import {all, call, put, takeLatest} from 'redux-saga/effects';
import { FAVOURITES_ACTION_TYPES } from './favourites.types';
import { updateUser } from '../../utils/firebase.utils';
import { getCurrentUser } from '../../utils/firebase.utils';



export function* favourites({payload}) {
    const currentUser = yield call(getCurrentUser);
    const {uid} = currentUser;
    yield call(updateUser,uid, {favourites:payload});
}
export function* onAddFavourites() {
    yield takeLatest(FAVOURITES_ACTION_TYPES.SET_FAVOURITES, favourites )
}
export function* favouritesSaga() {
    yield all([call(onAddFavourites)])
}