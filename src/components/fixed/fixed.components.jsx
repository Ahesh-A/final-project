import { Fragment } from "react";
import Navbar from "../navbar/navbar.components";
import Footer from "../footer/footer.component";
import { Outlet } from "react-router-dom";
const Fixed = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Fixed;
