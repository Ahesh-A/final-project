import { getCurrentUser, getMyOrders } from "../../utils/firebase.utils";
import "./my-orders.styles.scss";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/loader.component";
import ProductCard from "../../components/product-card/productcard.component";
const MyOrders = () => {
  const [myOrders, setMyOrders] = useState(null);

  useEffect(() => {
    const userObj = getCurrentUser();

    if (!userObj) alert("please sign-in...");
    else {
      userObj.then((res) => {
        const { uid } = res;
        console.log("uid---->", uid);
        const prodPromise = getMyOrders(uid);
        prodPromise.then((data) => {
          const { cartItems } = data;
          setMyOrders(cartItems);
        });
      });

      //   const [cartItems] = prod;
      //   console.log("My _ Orders", cartItems);
      //   if (prod) {
      //     setMyOrders(prod);
      //   }
    }
  }, []);

  return (
    <div>
      {myOrders ? (
        <div>
          <h1 className="my-orders-title-container">
            <span className="my-orders-title">My Orders</span>{" "}
            <div className="underline"></div>
          </h1>

          <div className="my-orders-container">
            {myOrders.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MyOrders;
