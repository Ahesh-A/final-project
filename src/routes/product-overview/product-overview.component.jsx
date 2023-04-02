import "./product-overview.styles.scss";
import { products } from "../../store/products/products.selector";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setOverViewProduct } from "../../store/product-overview/product-overview.action";
import { overViewProduct } from "../../store/product-overview/product-overview.selector";
import { setOverViewImageUrl } from "../../store/product-overview/product-overview.action";
import { setOverViewColor } from "../../store/product-overview/product-overview.action";
import { addItemsToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { getData } from "../../utils/firebase.utils";
import { additionalInfo } from "../../store/additional-info/additional-info.selector";
import Star from "../../components/star/star.component";

const ProductOverView = ({ productId }) => {
  const dispatch = useDispatch();
  const storeProducts = useSelector(products);
  const productOverView = useSelector(overViewProduct);
  const product = productOverView.product;
  const color = productOverView.color;
  const imageUrl = productOverView.imageUrl;
  const cartItems = useSelector(selectCartItems);
  const additionalData = useSelector(additionalInfo);

  // console.log(storeProducts);
  const [modifiedProduct, setModifiedProduct] = useState(null);

  useEffect(() => {
    const findProduct = async () => {
      let product = {};
      Object.values(storeProducts).forEach((productList) => {
        //console.log(productList);
        Object.values(productList).forEach((prod) => {
          if (prod.id === productId) {
            product = prod;
            // setImageUrl(prod.imageUrl);
          }
        });
      });
      await dispatch(setOverViewProduct(product));
      await dispatch(setOverViewImageUrl(product.imageUrl));
    };

    findProduct()
      .then(() => {
        return getData();
      })
      .then((res) => {
        console.log(res);
      });
  }, [productId, storeProducts, dispatch]);

  useEffect(() => {
    const filteredData = additionalData.find((prod) => prod.id === product.id);
    console.log("Filtered Data: ",filteredData);
    if (filteredData) {
      const { info } = filteredData;
      //console.log("Filtered Data if :",{ ...info, ...product });
    
      setModifiedProduct({ ...info, ...product });
    }
  }, [product, additionalData]);

  // const colorVariantHandler = () => {
  //   // const { value } = event.target;
  //   console.log(prop)
  // };
  const productClickHandler = (e) => {
    e.preventDefault();

    dispatch(
      addItemsToCart(cartItems, {
        ...product,
        imageUrl: productOverView.imageUrl,
        id: product.id + productOverView.imageUrl,
        color: productOverView.color,
      })
    );
  };
  return (
    modifiedProduct &&
    Object.values(product).length && (
      <div>
        <h3 className="product-overview-title">
          Overview:
          <div className="seperator"></div>
        </h3>
        <div className="product-overview">
          <div className="product-image-container">
            <div className="product-image">
              <img src={require(`../../${imageUrl}`)} alt={product} />
            </div>
          </div>

          <div className="product-description">
            <div className="product-name">{product.name}</div>
            <div className="product-des-container">
              <div className="product-des">
                <div className="star-container">
                  <span className="star-name-container">Rating: </span>
                  <Star star={modifiedProduct.star} />

                  {/* <FontAwesomeIcon icon={solid("star")} className="star"/>
                  <FontAwesomeIcon icon={solid("star")} className="star"/>
                  <FontAwesomeIcon icon={solid("star")} className="star"/>
                  <FontAwesomeIcon icon={solid("star")} className="star"/>
                  <FontAwesomeIcon icon={solid("star")} className="star"/> */}
                </div>

                <div className="price-container">
                  price: &#x20B9; {`${product.price}`}
                </div>
                <div className="size-container">
                  size:
                  <select className="size-select">
                    <option value={"S"}>S</option>
                    <option value={"M"}>M</option>
                    <option value={"L"}>L</option>
                    <option value={"XL"}>XL</option>
                    <option value={"2XL"}>2XL</option>
                    <option value={"3XL"}>3XL</option>
                  </select>
                </div>

                <div className="product-color-container">
                  <div className="product-color">color: {`${color}`} </div>
                  <div className="color-variants-container">
                    {product.variant &&
                      product.variant.map((v) => {
                        return (
                          <div
                            key={v.variant_image_url}
                            className="color-variant"
                            value={v}
                            onMouseEnter={() => {
                              dispatch(setOverViewColor(v.color));
                              dispatch(
                                setOverViewImageUrl(v.variant_image_url)
                              );
                            }}
                          >
                            <img src={require(`../../${v.color_url}`)} alt="" />
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="product-overview-button-container">
                  <button
                    className="product-overview-button"
                    onClick={productClickHandler}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="product-discount-container">
                <span className="discount">
                  <span className="dis">
                    <span className="dis-block">Off</span>
                    <span className="dis-block">
                      {" "}
                      {`${modifiedProduct.discount}%`}
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductOverView;
