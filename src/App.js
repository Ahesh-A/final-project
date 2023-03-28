import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Fixed from "./components/fixed/fixed.components";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import Product from "./routes/product/product.component";
import Cart from "./routes/cart/cart.component";
import CheckOut from "./routes/chect-out/check-out.component";
import MyAccount from "./routes/myaccount/myaccount.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUserSessionStart } from "./store/user/user.action";
import SearchResult from "./routes/search-result/search-result.component";
import Favourties from "./routes/favourites/favourites.component";
import { setProductsStart } from "./store/products/products.action";
import { additionalInfo } from "./store/additional-info/additional-info.selector";
import { products } from "./store/products/products.selector";


//import { insertProdInfo } from "./utils/firebase.utils.js";
// import { instertData } from "./utils/firebase.utils.js";
// import { data } from "./assets/data/data";
//import {prod_data} from "./assets/data/prod_data";

const App = () => {
  const dispatch = useDispatch();
  const additionalData = useSelector(additionalInfo);
  const cartProduct = useSelector(products);
  useEffect(() => {
    dispatch(checkUserSessionStart());
    dispatch(setProductsStart());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(addAdditionalStart());
  // }, [dispatch]);

  // useEffect(() => {
  //   let wholeProducts = [];
  //   if (cartProduct && additionalData) {
  //     Object.values(cartProduct).forEach((category) => {
  //       category.forEach((product) => {
  //         const addInfo = additionalData.find((prod) => prod.id === product.id);
  //         product = { ...product, ...addInfo };
  //         wholeProducts.push(product);
  //       });
  //     });
  //   }
  //   wholeProducts.sort((a, b) => b.discount - a.discount);

  //   //console.log("wholeproducts :", wholeProducts.slice(0, 3));
  //   dispatch(setOnSaleProducts(wholeProducts.slice(0, 3)));
    
  // }, [additionalData, cartProduct]);

  // useEffect(() => {
  //   insertProdInfo(prod_data);
  // //  instertData(data);
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
      </Route>
    </Routes>
  );
};

export default App;
