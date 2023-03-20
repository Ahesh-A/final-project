import "./product.styles.scss";

// import { getData } from "../../utils/firebase.utils.js";
// import { setProducts } from "../../store/products/products.action";

import ProductsPreview from "../../components/product-preview/products-preview.component";
import { Routes, Route } from "react-router-dom";
import ProductOrCategory from "../../components/productorcategory/productorcategory.component";

import { productsIsLoading } from "../../store/products/products.selector";
import Loader from "../../components/loader/loader.component.jsx";

import { useSelector } from "react-redux";
// import Category from "../../components/category/catgory.component";
// import ProductOverView from "../product-overview/product-overview.component";

const Product = () => {
  
  const isLoading = useSelector(productsIsLoading);
  

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
