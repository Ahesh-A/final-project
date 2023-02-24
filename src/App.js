import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
//import Navbar from "./components/navbar/navbar.components";
import Fixed from "./components/fixed/fixed.components";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import Product from "./routes/product/product.component";
import Cart from "./routes/cart/cart.component";
import CheckOut from "./routes/chect-out/check-out.component";
import MyAccount from "./routes/myaccount/myaccount.component";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChangedListener } from "./utils/firebase.utils.js";
import { setCurrentUser } from "./store/user/user.action";
import { getUsers } from "./utils/firebase.utils.js";
// import { instertData } from "./utils/firebase.utils.js";
// import { data } from "./assets/data/data";

const App = () => {
  const dispatch = useDispatch();
  const [uid, setUid] = useState(null);
  //const uid = 'WMnPL0NOAPhDAbods854WrtBaPs2';
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        const { uid,email } = user;
        console.log("The user is :", uid);
        const fetchUser = async () => {
          const users = await getUsers();
          const res = Object.values(users).find((user) => user.uid === uid);
          dispatch(setCurrentUser(res));
        };
        fetchUser();
      }
    });
    return unSubscribe;
  }, [dispatch]);

  // useEffect(() => {
  //   instertData(data);
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
      </Route>
    </Routes>
  );
};

export default App;
