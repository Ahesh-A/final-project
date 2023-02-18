import "./cart-sheet.styles.scss";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useDispatch } from "react-redux";
import {
  addItemsToCart,
  removeItemsFromCart,
  deleteItemFromCart,
} from "../../store/cart/cart.action";
const CartSheet = ({ cartItem, cartItems }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const addClickHandler = () => {
    dispatch(addItemsToCart(cartItems, cartItem));
  };
  const removeClickHandler = () => {
    dispatch(removeItemsFromCart(cartItems, cartItem));
  };

  const deleteClickHandler = () => {
    dispatch(deleteItemFromCart(cartItems, cartItem));
  };
  return (
    <Fragment>
      <div className="cart-item-container">
        <div className="cart-product-container">
          <img src={require(`../../${imageUrl}`)} alt="" />
        </div>
        <div className="cart-name-container">
          <h4>a&a_wear your style</h4>
          <p>{name}</p>
        </div>
        <div className="cart-unit-price-container">&#x20B9;{price}</div>
        <div className="cart-quantity-container">
          <div className="cart-quantity-adjuster">
            <div className="plus">
              <FontAwesomeIcon icon={solid("plus")} onClick={addClickHandler} />
            </div>
            <div className="quantity">{quantity}</div>
            <div className="minus">
              <FontAwesomeIcon
                icon={solid("minus")}
                onClick={removeClickHandler}
              />
            </div>
          </div>
        </div>
        <div className="cart-total-container">&#x20B9; {price * quantity}</div>
        <div className="cart-trash-container">
          <FontAwesomeIcon
            icon={solid("trash-can")}
            onClick={deleteClickHandler}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CartSheet;
