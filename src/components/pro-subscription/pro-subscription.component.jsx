import "./pro-subscription.styles.scss";
const ProSubscription = () => {
  return (
    <div>
      <div className="pro-subscription-container">
        <div className="pro-subscription-elements-container">
          <div className="pro-subscription-heading">
            Shop world class products
          </div>
          <div className="pro-sub-heading-container">
            <h1 className="h1">
              To enjoy the benifits and special offers become a pro member{" "}
            </h1>
          </div>

          <p>please read the terms and conditions before subscribing</p>
          <button>Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProSubscription;
