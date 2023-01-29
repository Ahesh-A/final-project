import { Fragment } from "react";
import "./productcard.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
const ProductCard = (product) => {
  const { name, price, imageUrl, id } = product;
  const link = "../../assets/men/men1.jpg";
  console.log(typeof "imageUrl");
  return (
    <Fragment>
      <div className="product-card">
        <div className="product-card-image-container">
          <img src={require(link)} alt={id} />
          <div className="product-image-shader"></div>
        </div>
        <p className="product-name">{name}</p>
        <div className="price-heart-container">
          <div className="heart-container">
            <FontAwesomeIcon icon={solid("heart")} />
          </div>
          <div className="price-container">{price}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
