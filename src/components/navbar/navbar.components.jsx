import "./navbar.styles.scss";
import { Fragment } from "react";
import NavbarUpper from "./navbar-upper/navbar-upper.component";
import NavbarMiddle from "./navbar-middle/navbar-middle.component";
import NavbarLower from "./navbar-lower/navbar-lower.component";
const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar-container">

        <NavbarUpper />

        <NavbarMiddle />

        <NavbarLower />

      </div>
    </Fragment>
  );
};

export default Navbar;
