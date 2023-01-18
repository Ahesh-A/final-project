import "./newsletter.styles.scss";
const NewsLetter = () => {
  return (
    <div>
      <div className="newsletter-container">
        <h4 className="newsletter-heading">NEWSLETTER</h4>
        <p className="newsletter-paragraph">
          Subscribe to our newsletter and get <span>10%</span> off your first
          purchase
        </p>
        <form className="newsletter-inputbox-container">
          <input type="text" placeholder="Your email address" />
          <button>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
