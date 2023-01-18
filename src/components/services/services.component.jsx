import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid
} from "@fortawesome/fontawesome-svg-core/import.macro";
import "./services.styles.scss";
const Services = () => {
  return (
    <div>
      <section className="service-container">
        <div className="service">
          <div className="icon-container">
            <FontAwesomeIcon icon={solid("shuttle-space")} />
          </div>
          <div className="service-content">
            <h4>FREE SHIPING</h4>
            <p>Orders over &#x20B9; 1000</p>
          </div>
        </div>
        <div className="service">
          <div className="icon-container">
            <FontAwesomeIcon icon={solid("arrows-rotate")} />
          </div>
          <div className="service-content">
            <h4>FREE RETURN</h4>
            <p>Within 30 days returns</p>
          </div>
        </div>
        <div className="service">
          <div className="icon-container">
            <FontAwesomeIcon icon={solid("lock")} />
          </div>
          <div className="service-content">
            <h4>SECURE PAYMENT</h4>
            <p>100% secure payment</p>
          </div>
        </div>
        <div className="service">
          <div className="icon-container">
            <FontAwesomeIcon icon={solid("tag")} />
          </div>
          <div className="service-content">
            <h4>BEST PRICE</h4>
            <p>Guaranteed price</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
