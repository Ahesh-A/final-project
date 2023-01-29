import { Fragment } from "react";
import "./navbar-lower.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
const NavbarLower = () => {
  const navigate = useNavigate();
  const productClickHandler = () => {
    console.log("product button triggered");
    navigate("product");
  };
  return (
    <Fragment>
      <div className="navbar-lower-container">
        <div className="navbar-lower-left-container">
          <FontAwesomeIcon icon={solid("bars")} />
          <div className="navbar-lower-left-container-title">CATEGORIES</div>
          <ul className="categories-container">
            <li className="categories">
              <span>New Arrivals</span>
            </li>

            <li className="categories">
              <span>Best Sellers</span>
            </li>

            <li className="categories">
              <span>Accessories</span>
            </li>
            <li className="categories">
              <span>Top 100 Offer</span>
            </li>
            <li className="categories">
              <span>Sunglasses</span>
            </li>
            <li className="categories">
              <span>Watch</span>
            </li>
            <li className="categories">
              <span>Man's Product</span>
            </li>
            <li className="categories">
              <span>Ladies</span>
            </li>
            <li className="categories">
              <span>Western Dress</span>
            </li>
            <li className="categories">
              <span>Denim</span>
            </li>
          </ul>
        </div>
        <div className="navbar-lower-right-container">
          <ul className="navbar-lower-right-content-container">
            <li className="navbar-lower-right-content-item">Home</li>
            <li
              className="navbar-lower-right-content-item"
              onClick={productClickHandler}
            >
              Product
            </li>
            <li className="navbar-lower-right-content-item">Service</li>
            <li className="navbar-lower-right-content-item">Shop</li>
            <li className="navbar-lower-right-content-item">Pages</li>
            <li className="navbar-lower-right-content-item">Blog</li>
            <li className="navbar-lower-right-content-item">Contact Us</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default NavbarLower;
