import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer.js";
import { signInReducer } from "./sign-in/sign-in.reducer.js";
import { productReducer } from "./products/products.reducer.js";
import { cartReducer } from "./cart/cart.reducer.js";
import { productOverViewReducer } from "./product-overview/product-overview.reducers.jsx";
export const rootReducer = combineReducers({
  user: userReducer,
  signin: signInReducer,
  products: productReducer,
  cart: cartReducer,
  product_overview: productOverViewReducer
});
