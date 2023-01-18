import "./under-slider.styles.scss";

const UnderSlider = () => {
  return (
    <div>
      <div className="under-slider-container">
        <div className="under-slider">
          <img
            src={require("../../assets/under-slider/mini-banner1.jpg")}
            alt="banner1"
          ></img>
          <div className="under-slider-content">
            <p>Man's Collection</p>
            <h3>
              Summer Travel Collection
              <br />
            </h3>
            <a href="#">Discover Now</a>
          </div>
        </div>

        <div className="under-slider">
          <img
            src={require("../../assets/under-slider/mini-banner2.jpg")}
            alt="banner1"
          ></img>
          <div className="under-slider-content">
            <p>Bag Collections</p>
            <h3>
              Awesome Bag 2023
              <br />
            </h3>
            <a href="#">Discover Now</a>
          </div>
        </div>

        <div className="under-slider">
          <img
            src={require("../../assets/under-slider/mini-banner3.jpg")}
            alt="banner1"
          ></img>
          <div className="under-slider-content">
            <p>Flash Sale </p>
            <h3>
              Mid Season Up To 40% Off
              <br />
            </h3>
            <a href="#">Discover Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderSlider;
