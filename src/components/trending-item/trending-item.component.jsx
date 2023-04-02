import "./trending-item.styles.scss";
import ProductCard from "../product-card/productcard.component";
import { useSelector } from "react-redux";
import { selectTrendingItem } from "../../store/trending-item/trending-item.selector";
const TrendingItem = () => {
  const trendingItems = useSelector(selectTrendingItem);
  console.log("In trending item component", trendingItems);
  return (
    <div>
      <div className="trending-item-container">
        <div className="trending-item-heading">
          <h2>Trending Item</h2>
        </div>
        <div className="trending-item-navbar-container">
          <ul className="trending-item-navbar">
            <li>MAN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>ACCESSORIES</li>
            <li>ESSENTIALS</li>
            <li>PRICES</li>
          </ul>
        </div>
        <div className="trending-item-product-container">
          {trendingItems && trendingItems.map((product) => (
            <div
              className="trending-item-product-card-container"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
          {/* <div className="trending-items-product">
            <img
              className="trending-item-img"
              src={require("../../assets/trending-item/p1.jpg")}
              alt=""
            />
            <p>
              Women Hot Collection <span>&#x20B9; 999</span>
            </p>
          </div>
          <div className="trending-items-product">
            <img src={require("../../assets/trending-item/p3.jpg")} alt="" />
            <p>
              Awesome Pink Show <span>&#x20B9; 799</span>
            </p>
          </div>
          <div className="trending-items-product">
            <img src={require("../../assets/trending-item/p6.jpg")} alt="" />
            <p>
              Awesome Bags Collection<span>&#x20B9; 499</span>
            </p>
          </div>
          <div className="trending-items-product">
            <img src={require("../../assets/trending-item/p7.jpg")} alt="" />
            <p>
              Women Pant Collectons <span>&#x20B9; 1099</span>
            </p>
          </div>
          <div className="trending-items-product">
            <img src={require("../../assets/trending-item/p9.jpg")} alt="" />
            <p>
              Awesome Bags Collection<span>&#x20B9; 399</span>
            </p>
          </div>
          <div className="trending-items-product">
            <img src={require("../../assets/trending-item/p11.jpg")} alt="" />
            <p>
              Awesome Cap For Women<span>&#x20B9; 299</span>
            </p>
          </div>
          <div className="trending-items-product">
            <img src={require("../../assets/trending-item/p13.jpg")} alt="" />
            <p>
              Polo Dress For Women <span>&#x20B9; 1199</span>
            </p>
          </div>
          <div className="trending-items-product">
            <img src={require("../../assets/trending-item/p15.jpg")} alt="" />
            <p>
              Black Sunglass For Women <span>&#x20B9; 799</span>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TrendingItem;
