import "./navbar.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  brands,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { ReactComponent as Aalogo } from "../../static-flies/logo/a&a apprales.svg";
const Navbar = () => {
  return (
    <div> 
      <div className="navbar-container">
      <div className="navbar-upper-container">
        <div className="nav-left-section">
          <ul>
            <li>
              <FontAwesomeIcon
                icon={solid("headphones-simple")}
                className="icon-style"
              />
              <span>+060 (800) 801-582</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={solid("envelope")}
                className="icon-style"
              />
              <span>aheshalagu@shophub.com</span>
            </li>
          </ul>
        </div>
        <div className="nav-right-section">
          <ul>
            <li>
              <FontAwesomeIcon
                icon={solid("location-dot")}
                className="icon-style"
              />
              <span>Store location</span>
            </li>
            <li>
              <FontAwesomeIcon icon={solid("clock")} className="icon-style" />
              <span>Daily deal</span>
            </li>
            <li>
              <FontAwesomeIcon icon={solid("user")} className="icon-style" />
              <span>My account</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={solid("power-off")}
                className="icon-style"
              />
              <span>Login</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-middle-container">
        <div className="nav-middle-left-container">
          <div className="logo-container">
            <Aalogo className="logostyles" />
            <FontAwesomeIcon icon={solid("circle")} className="dot-style" />
          </div>
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
            <li className = "nav-favourites">
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

      <div className="navbar-lower-container">
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon={solid("bars")} />
              <div className="">Categories</div>
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
                </li >
                <li className="categories">
                  <span>Sunglasses</span>
                </li>
                <li className="categories">
                  <span>Watch</span>
                </li>
                <li className="categories">
                  <span>Man's Product</span>
                </li >
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
            </span>
          </li>
          <li>
            <span>Home</span>
            <span>Product</span>
            <span>Service</span>
            <span>Shop</span>
            <span>Pages</span>
            <span>Blog</span>
            <span>Contact Us</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
    
  );
};

export default Navbar;
