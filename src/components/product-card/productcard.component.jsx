import { Fragment } from "react";
import { useState } from "react";
import "./productcard.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import { addItemsToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const productClickHandler = () => {
    dispatch(addItemsToCart(cartItems, product));
    setIsClicked(true);
    setInterval(() => setIsClicked(false), 2000);
  };
  return (
    <Fragment>
      <div
        className="product-card"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="product-image-shader">
          <div className="image-shader-icon">
            {isHovering && (
              <div
                className="imager-shader-icon-text-container"
                onClick={productClickHandler}
              >
                {isClicked ? (
                  <FontAwesomeIcon icon={solid("circle-check")} />
                ) : (
                  <FontAwesomeIcon icon={solid("bag-shopping")} />
                )}
                <span className="image-shader-text">
                  {isClicked ? "added" : "add to cart"}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="product-card-image-container">
          <div>
            <img src={require(`../../${imageUrl}`)} alt={name} />
          </div>
        </div>
        <p className="product-name">{name}</p>
        <div className="price-heart-container">
          <div className="heart-container">
            <FontAwesomeIcon icon={solid("heart")} />
          </div>
          <div className="price-container"> &#x20B9; {price}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
