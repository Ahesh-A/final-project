import "./product.styles.scss";
import { useEffect } from "react";
// import { getData } from "../../utils/firebase.utils.js";
// import { setProducts } from "../../store/products/products.action";
import { useDispatch } from "react-redux";
import ProductsPreview from "../../components/product-preview/products-preview.component";
import { Routes, Route } from "react-router-dom";
import ProductOrCategory from "../../components/productorcategory/productorcategory.component";
import { setProductsStart } from "../../store/products/products.action";
import { productsIsLoading } from "../../store/products/products.selector";
import Loader from "../../components/loader/loader.component.jsx";

import { useSelector } from "react-redux";
// import Category from "../../components/category/catgory.component";
// import ProductOverView from "../product-overview/product-overview.component";

const Product = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(productsIsLoading);
  console.log("product loading" + isLoading);
  useEffect(() => {
    dispatch(setProductsStart());
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="product-sheet-container">
          <Routes>
            <Route index element={<ProductsPreview />} />
            <Route path=":prodOrCat/*" element={<ProductOrCategory />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default Product;
