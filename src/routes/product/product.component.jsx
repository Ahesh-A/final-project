import "./product.styles.scss";
import { useEffect } from "react";
// import { getData } from "../../utils/firebase.utils.js";
// import { setProducts } from "../../store/products/products.action";
import { useDispatch } from "react-redux";
import ProductsPreview from "../../components/product-preview/products-preview.component";
import { Routes, Route } from "react-router-dom";
import ProductOrCategory from "../../components/productorcategory/productorcategory.component";
import { setProductsStart } from "../../store/products/products.action";
// import Category from "../../components/category/catgory.component";
// import ProductOverView from "../product-overview/product-overview.component";
const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductsStart());
    // const getProducts = async () => {
    //   const productList = await getData();
    //   const data = productList.reduce((acc, item) => {
    //     const { title, products } = item;
    //     acc[title.toLowerCase()] = products;
    //     return acc;
    //   }, {});
    //   dispatch(setProducts(data));
    // };
    // getProducts();
  }, [dispatch]);
  return (
    <div>
      <div className="product-sheet-container">
        <Routes>
          <Route index element={<ProductsPreview />} />
          <Route path=":prodOrCat/*" element={<ProductOrCategory />} />
          {/* <Route path=":product_id/*" element = {<ProductOverView/>} />
          <Route path=":productType/*" element={<Category />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Product;
