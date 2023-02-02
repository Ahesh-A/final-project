import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { motion } from "framer-motion";
import CartDropdownSheet from "../cart-dropdown-sheet/cart-dropdown-sheet.component.jsx";

import "./cart-drop-down.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  console.log(typeof cartItems);
  console.log("cartItems", cartItems);

  return (
    <Fragment>
      <motion.div 
        className="cart-drop-down-container"
        animate = {{scale: 1}}
        initial = {{scale: 0}}
        >
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartDropdownSheet cartItem={cartItem} key={cartItem.id} />
          ))
        ) : (
          <span className="cart-empty">Cart is Empty</span>
        )}
        {cartItems.length ? (
          <button className="cart-drop-down-button">CHECKOUT</button>
        ) : null}
      </motion.div>
    </Fragment>
  );
};

export default CartDropdown;
