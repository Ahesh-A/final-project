import "./cart.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid

} from "@fortawesome/fontawesome-svg-core/import.macro";
const Cart = () => {
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

          <div className="cart-item-container">
            <div className="cart-product-container">
              <img
                src={require("../../assets/hot/onsale/shop-list1.jpg")}
                alt=""
              />
            </div>
            <div className="cart-name-container">
              <h4>Women Dress</h4>
              <p>Maboriosam in a tonto nesciung eget distingy magndapibus.</p>
            </div>
            <div className="cart-unit-price-container">&#x20B9;2000</div>
            <div className="cart-quantity-container">
              <div className="cart-quantity-adjuster">
                <div className="plus">
                  <FontAwesomeIcon icon={solid("plus")} />
                </div>
                <div className="quantity">2</div>
                <div className="minus">
                  <FontAwesomeIcon icon={solid("minus")} />
                </div>
              </div>
            </div>
            <div className="cart-total-container">&#x20B9; 4000</div>
            <div className="cart-trash-container">
              <FontAwesomeIcon icon={solid("trash-can")} />
            </div>
          </div>
          <div className="cart-item-container">
            <div className="cart-product-container">
              <img
                src={require("../../assets/hot/onsale/shop-list2.jpg")}
                alt=""
              />
            </div>
            <div className="cart-name-container">
              <h4>Women Dress</h4>
              <p>Maboriosam in a tonto nesciung eget distingy magndapibus.</p>
            </div>
            <div className="cart-unit-price-container">&#x20B9;2000</div>
            <div className="cart-quantity-container">
              <div className="cart-quantity-adjuster">
                <div className="plus">
                  <FontAwesomeIcon icon={solid("plus")} />
                </div>
                <div className="quantity">2</div>
                <div className="minus">
                  <FontAwesomeIcon icon={solid("minus")} />
                </div>
              </div>
            </div>
            <div className="cart-total-container">&#x20B9; 4000</div>
            <div className="cart-trash-container">
              <FontAwesomeIcon icon={solid("trash-can")} />
            </div>
          </div>
          <div className="cart-item-container">
            <div className="cart-product-container">
              <img
                src={require("../../assets/hot/onsale/shop-list3.jpg")}
                alt=""
              />
            </div>
            <div className="cart-name-container">
              <h4>Women Dress</h4>
              <p>Maboriosam in a tonto nesciung eget distingy magndapibus.</p>
            </div>
            <div className="cart-unit-price-container">&#x20B9;2000</div>
            <div className="cart-quantity-container">
              <div className="cart-quantity-adjuster">
                <div className="plus">
                  <FontAwesomeIcon icon={solid("plus")} />
                </div>
                <div className="quantity">2</div>
                <div className="minus">
                  <FontAwesomeIcon icon={solid("minus")} />
                </div>
              </div>
            </div>
            <div className="cart-total-container">&#x20B9; 4000</div>
            <div className="cart-trash-container">
              <FontAwesomeIcon icon={solid("trash-can")} />
            </div>
          </div>
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
              <div className = "cart-lower-right-contents-container">
                <li>
                  <span>Cart Subtotal</span>
                  <span>&#x20B9; 2000</span>
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
                  <span>&#x20B9; 1800</span>
                </li>
                <div className="cart-lower-right-buttons-container">
                  <button className="cart-lower-right-button">CHECKOUT</button>
                  <button className="cart-lower-right-button">CONTINUE SHOPPING</button>
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
