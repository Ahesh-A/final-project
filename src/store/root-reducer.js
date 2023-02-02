import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer.js";
import { signInReducer } from "./sign-in/sign-in.reducer.js";
import { productReducer } from "./products/products.reducer.js";
import { cartReducer } from "./cart/cart.reducer.js";
export const rootReducer = combineReducers({
  user: userReducer,
  signin: signInReducer,
  products: productReducer,
  cart: cartReducer,
});
