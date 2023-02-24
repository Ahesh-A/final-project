import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import CartSheet from "../../components/cart-sheet/cart-sheet.component";
import "./cart.styles.scss";
const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();
  const checkOutNavigator = () => {
    navigate("/checkout");
  };
  const continueShoppingNavigator = () => {
    navigate("/product");
  };
  return (
    <div>
      <div className="cart-container">
        <div className="cart-upper-container">
          <h4 className="cart-heading-container">
            <div className="cart-heading-item1">PRODUCT</div>
            <div className="cart-heading-item2">NAME</div>
            <div className="cart-heading-item3">UNIT PRICE</div>
            <div className="cart-heading-item4">QUANTITY</div>
            <div className="cart-heading-item5">TOTAL</div>
            <div className="cart-heading-item6">
              <FontAwesomeIcon icon={solid("trash-can")} />
            </div>
          </h4>
          {cartItems &&
            cartItems.map((cartItem) => (
              <CartSheet
                cartItem={cartItem}
                cartItems={cartItems}
                key={cartItem.imageUrl}
              />
            ))}
        </div>
        <div className="cart-lower-container">
          <div className="cart-lower-left-container">
            <div className="coupon">
              <input type="text" placeholder="Coupon Code" />
              <button>APPLY</button>
            </div>
            <div className="cart-lower-check-box-container">
              <input type="checkbox" id="lower-cart-shipping" />
              <label htmlFor="lower-cart-shipping">
                {" "}
                Shipping ( +200 &#x20B9;)
              </label>
            </div>
          </div>
          <div className="cart-lower-right-container">
            <ul>
              <div className="cart-lower-right-contents-container">
                <li>
                  <span>Cart Subtotal</span>
                  <span>&#x20B9; {cartTotal}</span>
                </li>
                <li>
                  <span>Shipping</span>
                  <span>Free</span>
                </li>
                <li className="upper-bill">
                  <span>You Save</span>
                  <span>&#x20B9; 200</span>
                </li>
                <li className="you-pay">
                  <span>You Pay</span>
                  <span>&#x20B9; {cartTotal - 200}</span>
                </li>
                <div className="cart-lower-right-buttons-container">
                  <button
                    className="cart-lower-right-button"
                    onClick={checkOutNavigator}
                  >
                    CHECKOUT
                  </button>
                  <button
                    className="cart-lower-right-button"
                    onClick={continueShoppingNavigator}
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
