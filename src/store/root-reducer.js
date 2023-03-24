import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer.js";
import { signInReducer } from "./sign-in/sign-in.reducer.js";
import { productReducer } from "./products/products.reducer.js";
import { cartReducer } from "./cart/cart.reducer.js";
import { productOverViewReducer } from "./product-overview/product-overview.reducers.jsx";
import { searchProductReducer } from "./search-product/search-product.reducer.js";
import { favouritesReducer } from "./favourites/favourites.reducer.js";
import { additionalInfoReducer } from "./additional-info/additional-info.reducer.js";
export const rootReducer = combineReducers({
  user: userReducer,
  signin: signInReducer,
  products: productReducer,
  cart: cartReducer,
  product_overview: productOverViewReducer,
  search_product: searchProductReducer,
  favourites: favouritesReducer,
  additional_info: additionalInfoReducer,
});
