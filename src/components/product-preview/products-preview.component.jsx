import { useSelector } from "react-redux";
import { products } from "../../store/products/products.selector";
import ProductSheet from "../../components/product-sheet/product-sheet.component";
import { Fragment } from "react";
const ProductsPreview = () => {
  const productList = useSelector(products);
  return (
    <Fragment>
      {Object.keys(productList).map((title) => {
        const products = Object.values(productList[title]).filter((_, idx) => idx < 4);
        return <ProductSheet title={title} products={products} key={title} />;
      })}
    </Fragment>
  );
};

export default ProductsPreview;
