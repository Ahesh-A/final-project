import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  brands,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import "./navbar-middle.styles.scss";
import Logo from "../../logo/logo.component";
const NavbarMiddle = () => {
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
              <FontAwesomeIcon icon={regular("user")} />
            </li>
            <li>
              <FontAwesomeIcon icon={brands("opencart")} />
              <div>2</div>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default NavbarMiddle;
