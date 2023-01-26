import "./footer.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import Logo from "../logo/logo.component";
const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div>
          <div className="footer-upper-section">
            <section className="footer-upper-left-container">
              <Logo />
              <div className="footer-left-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam, hic quam. Quo, cupiditate odit praesentium ipsum
                eveniet sed nam recusandae reprehenderit. Temporibus veniam iste
                natus modi enim facilis sed architecto.
              </div>
              <div className="footer-left-lower-section">
                <p>Got Question? Call us 24/7</p>
                <h4>+0123 456 789</h4>
              </div>
            </section>
            <section className="footer-upper-right-container">
              <h4>Information</h4>
              <div className="footer-content">About Us </div>
              <div className="footer-content">Faq</div>
              <div className="footer-content">Terms & Conditions</div>
              <div className="footer-content">Contact Us</div>
              <div className="footer-content">Help</div>
            </section>
            <section className="footer-upper-right-container">
              <h4>Customer Service</h4>
              <div className="footer-content">Payment Methods</div>
              <div className="footer-content">Money-back</div>
              <div className="footer-content">Returns</div>
              <div className="footer-content">Shipping</div>
              <div className="footer-content">Contact Us</div>
              <div className="footer-content">Privacy Policy</div>
            </section>
            <section className="footer-upper-right-container">
              <h4>Get In Touch</h4>
              <div className="footer-content">
                NO. 342 - London Oxford Street.
              </div>
              <div className="footer-content">012 United Kingdom.</div>
              <div className="footer-content">info@eshop.com</div>
              <div className="footer-content">+032 3456 7890</div>
              <div>
                <div className="footer-right-icons-container">
                  <div className="icon-warpper">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="icon-warpper">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="icon-warpper">
                    <FontAwesomeIcon icon={brands("instagram")} />
                  </div>
                  <div className="icon-warpper">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
