import "./hot.styles.scss";
import { useSelector } from "react-redux";
import { selectTopViewed } from "../../store/top-viewed/top-viewed.selector";
import { selectBestSeller } from "../../store/best-seller/best-seller.selector";
import { selectOnSaleProducts } from "../../store/onsale/onsale.selector";
import ProductCard from "../product-card/productcard.component";
const Hot = () => {
  const topViewed = useSelector(selectTopViewed);
  const bestSeller = useSelector(selectBestSeller);
  const onSale = useSelector(selectOnSaleProducts);

  return (
    <div>
      <div className="hot-container">
        <div className="onsale">
          <h2 className="hot-title">On Sale</h2>
          <div className="on-sale-product-card-container">
            {onSale.map((product) => (
              <div className="on-sale-product-card">
                <ProductCard product={product} key={product.id} />
              </div>
            ))}
          </div>

          {/* <div className="hot-picture-card">
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
          </div> */}
        </div>
        <div className="best-seller">
          <h2 className="hot-title">Best Seller</h2>
          <div className="on-sale-product-card-container">
          {bestSeller.map((product) => (
              <div className="on-sale-product-card">
                <ProductCard product={product} key={product.id} />
              </div>
            ))}
          </div>
          
          {/* <div className="hot-picture-card">
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
          </div> */}
        </div>
        <div className="top-viewed">
          <h2 className="hot-title">Top Viewed</h2>
          <div className="on-sale-product-card-container">
          {topViewed.map((product) => (
              <div className="on-sale-product-card">
                <ProductCard product={product} key={product.id} />
              </div>
            ))}
          </div>
          {/* <div className="hot-picture-card">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hot;
