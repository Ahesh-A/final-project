import { Fragment, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { products } from "../../store/products/products.selector.js";
import ProductSheet from "../product-sheet/product-sheet.component";
const Category = ({ productType }) => {
  //const { productType } = useParams();
  const productList = useSelector(products);
  const [sheetproducts, setSheetProducts] = useState(productList[productType]);
  //console.log(productType);
  useEffect(() => {
    const filteredProduct = productList[productType];
    setSheetProducts(filteredProduct);
  }, [productType, productList]);
  return (
    <Fragment>
      {sheetproducts && (
        <ProductSheet products={sheetproducts} title={productType} />
      )}
    </Fragment>
  );
};
export default Category;
