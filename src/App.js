import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Fixed from "./components/fixed/fixed.components";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import Product from "./routes/product/product.component";
import Cart from "./routes/cart/cart.component";
import CheckOut from "./routes/chect-out/check-out.component";
import MyAccount from "./routes/myaccount/myaccount.component";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { checkUserSessionStart } from "./store/user/user.action";
import SearchResult from "./routes/search-result/search-result.component";
import Favourties from "./routes/favourites/favourites.component";
import { setProductsStart } from "./store/products/products.action";
import MyOrders from "./routes/my-orders/my-orders.component";

// import { additionalInfo } from "./store/additional-info/additional-info.selector";
// import { products } from "./store/products/products.selector";
// import { insertAddProdInfo } from "./utils/firebase.utils.js";
// import { instertData } from "./utils/firebase.utils.js";
// import { data } from "./assets/data/data";
// import {prod_data} from "./assets/data/prod_data";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSessionStart());
    dispatch(setProductsStart());
  }, [dispatch]);


  // useEffect(() => {
  //   // insertAddProdInfo(prod_data);
  //   console.log("In prod Add inffo : ",prod_data)
  //  //instertData(data);
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Fixed />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="product/*" element={<Product />} />
        <Route path="user" element={<MyAccount />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="search-results" element={<SearchResult />} />
        <Route path="favourites" element={<Favourties />} />
        <Route path="my-orders" element = {<MyOrders />} />
      </Route>
    </Routes>
  );
};

export default App;
