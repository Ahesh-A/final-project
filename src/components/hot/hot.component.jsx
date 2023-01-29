import "./hot.styles.scss";


const Hot = () => {
  // const clickHandler = () => {
  //   const randomNumber = Math.round(Math.random());
  //   const audio = randomNumber ? audio1 : audio2;
  //   console.log(randomNumber);
  //   new Audio(audio).play();
  // };

  return (
    <div>
      <div className="hot-container">
        <div className="onsale">
          <h2 className="hot-title">On Sale</h2>
          <div className="hot-picture-card">
            <div className="image-container">
              <img
                className="hot-img"
                src={require("../../assets/hot/onsale/shop-list1.jpg")}
                alt="hot-pic"
                // onClick={clickHandler}
              />
            </div>
            <div className="pic-description">
              <p>Licity jelly white fit</p>
              <button>&#x20B9; 300</button>
            </div>
          </div>

          <div className="hot-picture-card">
            <div className="image-container">
              <img
                className="hot-img"
                src={require("../../assets/hot/onsale/shop-list2.jpg")}
                alt="hot-pic"
              />
            </div>
            <div className="pic-description">
              <p>Licity jelly white fit</p>
              <button>&#x20B9; 300</button>
            </div>
          </div>

          <div className="hot-picture-card">
            <div className="image-container">
              <img
                className="hot-img"
                src={require("../../assets/hot/onsale/shop-list3.jpg")}
                alt="hot-pic"
              />
            </div>
            <div className="pic-description">
              <p>Licity jelly white fit</p>
              <button>&#x20B9; 300</button>
            </div>
          </div>
        </div>
        <div className="best-seller">
          <h2 className="hot-title">Best Seller</h2>
          <div className="hot-picture-card">
            <div className="image-container">
              <img
                className="hot-img"
                src={require("../../assets/hot/bestseller/shop-list4.jpg")}
                alt="hot-pic"
              />
            </div>
            <div className="pic-description">
              <p>Licity jelly white fit</p>
              <button>&#x20B9; 300</button>
            </div>
          </div>

          <div className="hot-picture-card">
            <div className="image-container">
              <img
                className="hot-img"
                src={require("../../assets/hot/bestseller/shop-list5.jpg")}
                alt="hot-pic"
              />
            </div>
            <div className="pic-description">
              <p>Licity jelly white fit</p>
              <button>&#x20B9; 300</button>
            </div>
          </div>

          <div className="hot-picture-card">
            <div className="image-container">
              <img
                className="hot-img"
                src={require("../../assets/hot/bestseller/shop-list6.jpg")}
                alt="hot-pic"
              />
            </div>
            <div className="pic-description">
              <p>Licity jelly white fit</p>
              <button>&#x20B9; 300</button>
            </div>
          </div>
        </div>
        <div className="top-viewed">
          <h2 className="hot-title">Top Viewed</h2>
          <div className="hot-picture-card">
            <div className="image-container">
              <img
                className="hot-img"
                src={require("../../assets/hot/topviewed/shop-list7.jpg")}
                alt="hot-pic"
              />
            </div>
            <div className="pic-description">
              <p>Licity jelly white fit</p>
              <button>&#x20B9; 300</button>
            </div>
          </div>

          <div className="hot-picture-card">
            <div className="image-container">
              <img
                className="hot-img"
                src={require("../../assets/hot/topviewed/shop-list8.jpg")}
                alt="hot-pic"
              />
            </div>
            <div className="pic-description">
              <p>Licity jelly white fit</p>
              <button>&#x20B9; 300</button>
            </div>
          </div>

          <div className="hot-picture-card">
            <div className="image-container">
              <img
                className="hot-img"
                src={require("../../assets/hot/topviewed/shop-list9.jpg")}
                alt="hot-pic"
              />
            </div>
            <div className="pic-description">
              <p>Licity jelly white fit</p>
              <button>&#x20B9; 300</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot;
