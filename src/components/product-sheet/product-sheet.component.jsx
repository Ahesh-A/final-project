import "./product-sheet.styles.scss";
import { Fragment } from "react";
import ProductCard from "../product-card/productcard.component";
import { useNavigate } from "react-router-dom";
const ProductSheet = (sheet) => {
  const { title, products } = sheet;
  const navigate = useNavigate();
  const productTitleClickHandler = () => {
    navigate(title);
  };
  return (
    <Fragment>
      <div>
        <h2 className="product-title-container">
          <span className="product-title" onClick={productTitleClickHandler}>
            {title}
          </span>
        </h2>
        <div className="product-card-container">
          {Object.values(products).map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductSheet;
