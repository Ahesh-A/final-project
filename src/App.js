import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
//import Navbar from "./components/navbar/navbar.components";
import Fixed from "./components/fixed/fixed.components";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import Product from "./routes/product/product.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChangedListener } from "./utils/firebase.utils.js";
import { setCurrentUser } from "./store/user/user.action";

//  import { instertData } from "./utils/firebase.utils.js";
//  import { data } from "./assets/data/data";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        console.log("The user is :", user);
      }
      dispatch(setCurrentUser(user));
    });

    return unSubscribe;
  }, [dispatch]);

   
  return (
    <Routes>
      <Route path="/" element={<Fixed />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="product" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default App;
