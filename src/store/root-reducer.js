import { combineReducers } from 'redux';
import { userReducer } from './user/user-reducer.js';
import { signInReducer } from './sign-in/sign-in.reducer.js';

export const rootReducer = combineReducers({
    user: userReducer,
    signin: signInReducer
});
