import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount
} from "../../../store/cart/cart.selector";
import { setIsCartOpen } from "../../../store/cart/cart.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../../store/user/user.selector";
import {
  solid,
  brands,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import CartDropdown from "../../cart-dropdown/cart-drop-down.component";
import Logo from "../../logo/logo.component";

import "./navbar-middle.styles.scss";
const NavbarMiddle = () => {
  const dispatch = useDispatch();
  const iscartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const cartClickHandler = () => {
    navigate("cart");
  };
  const userClickHandler = () => {
    if (user) navigate("/user");
    else alert("you are not signed in ...");
  };
  return (
    <Fragment>
      <div className="navbar-middle-container">
        <div className="nav-middle-left-container">
          <Logo />
        </div>
        <div className="nav-middle-center-container">
          <div className="search-bar">
            <div className="product-categories">
              <span> All Category</span>
              <FontAwesomeIcon icon={solid("chevron-down")} />
            </div>

            <form action="submit">
              <input type="search" placeholder="search item" />
              <button>
                <FontAwesomeIcon icon={solid("magnifying-glass")} />
              </button>
            </form>
          </div>
        </div>
        <div className="nav-middle-right-container">
          <ul className="icons-container">
            <li className="nav-favourites">
              <FontAwesomeIcon icon={regular("heart")} />
            </li>
            <li>
              <FontAwesomeIcon
                icon={regular("user")}
                onClick={userClickHandler}
              />
            </li>
            <li
              className="cart"
              onMouseEnter={() => {
                dispatch(setIsCartOpen(true));
              }}
              onMouseLeave={() => {
                dispatch(setIsCartOpen(false));
              }}
            >
              <FontAwesomeIcon
                icon={brands("opencart")}
                onClick={cartClickHandler}
              />
              {iscartOpen && <CartDropdown />}
              <div className="cart-count">{cartCount}</div>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default NavbarMiddle;
