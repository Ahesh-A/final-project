import "./product-name-slice.styles.scss";
import { setSearchString } from "../../store/search-product/search-product.action";
import { useDispatch } from "react-redux";

const ProductNameSlice = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-name-slice-container">
      <div>
        {products &&
          Object.values(products).map((product) => (
            <div
              key={product.id}
              className="product-strip"
              onClick={() => {dispatch(setSearchString(product.name))}}
            >
              {product.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductNameSlice;
