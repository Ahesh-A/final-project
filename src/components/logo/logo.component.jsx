import "./logo.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ReactComponent as Aalogo } from "../../static-files/logo/a&a apprales.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to = "/">
        <div className="logo-container">
          <Aalogo className="logostyles" />
          <FontAwesomeIcon icon={solid("circle")} className="dot-style" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
