import "./single-slider.styles.scss";
const SingleSlider = () => {
  return (
    <div className="single-slider-container">
      <div className="slide-container">
        <div className="slide">
          <span className="slide-offer">UP TO 50% OFF</span>
          <h2 className="slide-heading">Shirt For Men</h2>
          <p className = "slide-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            nesciunt aliquid at est doloremque ipsam ipsum sunt ut eos earum?
            Harum nihil sapiente esse optio molestias itaque iure dicta
            possimus.
          </p>
          <button className="slide-button">SHOP NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default SingleSlider;
