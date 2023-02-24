import { Fragment } from "react";
import "./navbar-upper.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import { googleSignOut } from "../../../utils/firebase.utils.js";
const NavbarUpper = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const loginClickHandler = () => {
    navigate("sign-in");
  };
  const signOutClickHandler = () => {
    googleSignOut();
    navigate("/");
  };
  const myAccountClickHandler = () => {
    if (currentUser) navigate("user");
    else alert("you are not signed in ...");
  };

  return (
    <Fragment>
      <div className="navbar-upper-container">
        <div className="nav-left-section">
          <ul className="nav-left-section-items-container">
            <li className="nav-left-section-items">
              <FontAwesomeIcon
                icon={solid("headphones-simple")}
                className="icon-style"
              />
              <span>+060 (800) 801-582</span>
            </li>
            <li className="nav-left-section-items last-child">
              <FontAwesomeIcon
                icon={solid("envelope")}
                className="icon-style"
              />
              <span>aheshalagu@shophub.com</span>
            </li>
          </ul>
        </div>
        <div className="nav-right-section">
          <ul className="nav-rigth-section-items-container">
            <li className="nav-rigth-section-items">
              <FontAwesomeIcon
                icon={solid("location-dot")}
                className="icon-style"
              />
              <span>Store location</span>
            </li>
            <li className="nav-rigth-section-items">
              <FontAwesomeIcon icon={solid("clock")} className="icon-style" />
              <span>Daily deal</span>
            </li>
            <li
              className="nav-rigth-section-items"
              onClick={myAccountClickHandler}
            >
              <FontAwesomeIcon icon={solid("user")} className="icon-style" />
              <span>My account</span>
            </li>
            <li className="nav-rigth-section-items last-child">
              <FontAwesomeIcon
                icon={solid("power-off")}
                className="icon-style"
              />
              {currentUser ? (
                <span onClick={signOutClickHandler}>Sign Out</span>
              ) : (
                <span onClick={loginClickHandler}>Login</span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default NavbarUpper;
