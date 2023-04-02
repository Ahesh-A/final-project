import { Fragment } from "react";
import { useState, useEffect } from "react";
import "./productcard.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import { addItemsToCart } from "../../store/cart/cart.action";
import { useNavigate } from "react-router-dom";
import { selectFavourites } from "../../store/favourites/favourites.selector.js";
import { setFavourites } from "../../store/favourites/favourites.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { setTopViewedProductsStart } from "../../store/top-viewed/top-viewed.action";
import { additionalInfo } from "../../store/additional-info/additional-info.selector.js";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const additionalData = useSelector(additionalInfo);
  const { name, price, imageUrl, id } = product;
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [inFavourites, setInFavourites] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const favourites = useSelector(selectFavourites);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const res = favourites.find((fav) => fav.id === product.id);
    if (res) setInFavourites(true);
    else setInFavourites(false);
  }, [favourites, product]);
  
  const productClickHandler = () => {
    dispatch(
      addItemsToCart(cartItems, {
        ...product,
        id: product.id + product.imageUrl,
      })
    );
    setIsClicked(true);
    setInterval(() => setIsClicked(false), 2000);
  };

  const addToFavHandler = () => {
    if (!currentUser) {
      alert("please signin before adding to favourites");
      return;
    }
    if (favourites.length) {
      const res = favourites.find((fav) => fav.id === product.id);
      if (res) {
        const res1 = favourites.filter((fav) => fav.id !== res.id);
        dispatch(setFavourites([...res1]));
      } else {
        dispatch(setFavourites([...favourites, product]));
      }
    } else dispatch(setFavourites([product]));
  };

  const viewHandler = () => {
    const findProd = Object.values(additionalData).find(
      (prod) => prod.id === product.id
    );
    if (findProd) {
      findProd.view_count = product.view_count + 1;
      dispatch(setTopViewedProductsStart({
        ...findProd,
        view_count: findProd.view_count,
      }));
    }
    navigate(`/product/${id}`);
    
  };
  
  return (
    <Fragment>
      {product && (
        <div
          className="product-card"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="product-image-shader">
            <div className="image-shader-icon">
              {isHovering && (
                <div className="imager-shader-icon-text-container">
                  {isClicked ? (
                    <FontAwesomeIcon icon={solid("circle-check")} />
                  ) : (
                    <FontAwesomeIcon
                      icon={solid("bag-shopping")}
                      onClick={productClickHandler}
                    />
                  )}
                  <span className="image-shader-text">
                    {isClicked ? "added" : "add to cart"}
                  </span>
                  <div className="view-container" onClick={viewHandler}>
                    <span className="view">view</span>
                  </div>
                  <div
                    className={`fav-icon-container ${
                      inFavourites ? `fav` : ``
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={solid("heart")}
                      onClick={addToFavHandler}
                    />
                  </div>
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
            <div className={`heart-container ${inFavourites ? `fav` : ``} `}>
              <FontAwesomeIcon icon={solid("heart")} />
            </div>
            <div className="price-container"> &#x20B9; {price}</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductCard;
