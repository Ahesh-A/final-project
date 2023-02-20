import "./product-overview.styles.scss";
import { products } from "../../store/products/products.selector";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const ProductOverView = ({ productId }) => {
  const storeProducts = useSelector(products);
  const [product, setProduct] = useState(null);
  console.log(productId);
  
  useEffect(() => {
    const prod = Object.values(storeProducts).forEach((productList) => {
      const res = Object.values(productList).forEach((product) => {
        if (product.id === productId) {
          setProduct(product);
        }
      });
    });
  }, [productId, storeProducts]);
  console.log(product);
  return <div className="product-overview"> fuytuytuytuytu overview</div>;
};

export default ProductOverView;
