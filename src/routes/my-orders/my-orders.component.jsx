import { getCurrentUser } from "../../utils/firebase.utils";
import "./my-orders.styles.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { setMyOrdersStart } from "../../store/my-orders/my-orders.action";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectMyOrders,
} from "../../store/my-orders/my-orders.selector";
import Loader from "../../components/loader/loader.component";
import TrackProgressor from "../../components/track-progressor/track-progressor.component";
const MyOrders = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const myOrders = useSelector(selectMyOrders);

  useEffect(() => {
    const userObj = getCurrentUser();

    if (!userObj) alert("please sign-in...");
    else {
      dispatch(setMyOrdersStart());
    }
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="my-orders-title-container">
        <h2 className="my-orders-title"> My Orders</h2>
        <div className="underline"></div>
      </div>
      {myOrders.map((deliverProd) => {
        const {
          processing_order,
          product_delivered,
          product_dispatched,
          quality_check,
          deliverId,
          confirmed_order,
        } = deliverProd;
        return (
          <div className="main_container" key={deliverId}>
            <div className="container padding-bottom-3x mb-1">
              <div className="card mb-3">
                <div className="p-4 text-center text-white text-lg bg-dark rounded-top">
                  <span className="text-uppercase">Deliver Id - </span>
                  <span className="text-medium">{deliverId}</span>
                </div>
                <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                  <div className="w-100 text-center py-1 px-2">
                    <span className="text-medium">Shipped Via:</span> UPS Ground
                  </div>
                  <div className="w-100 text-center py-1 px-2">
                    <span className="text-medium">Status:</span> Checking
                    Quality
                  </div>
                  <div className="w-100 text-center py-1 px-2">
                    <span className="text-medium">Expected Date:</span> APR 27,
                    2021
                  </div>
                </div>
                <div className="card-body">
                  <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                    <TrackProgressor
                      done={confirmed_order}
                      title="Confirmed Order"
                      icon="pe-7s-cart"
                    />
                    <TrackProgressor
                      done={processing_order}
                      title="Processing Order"
                      icon="pe-7s-config"
                    />
                    <TrackProgressor
                      done={quality_check}
                      title="Quality Check"
                      icon="pe-7s-medal"
                    />
                    <TrackProgressor
                      done={product_dispatched}
                      title="Product Dispatched"
                      icon="pe-7s-car"
                    />
                    <TrackProgressor
                      done={product_delivered}
                      title="Product Delivered"
                      icon="pe-7s-home"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* {myOrders ? (
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
      )} */}
    </div>
  );
};

export default MyOrders;
