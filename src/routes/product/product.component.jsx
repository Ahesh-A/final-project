import "./product.styles.scss";
import { useEffect } from "react";
import { getData } from "../../utils/firebase.utils.js";
import { setProducts } from "../../store/products/products.action";
import { useDispatch } from "react-redux";
import ProductsPreview from "../../components/product-preview/products-preview.component";
import { Routes, Route } from "react-router-dom";
import Category from "../../components/category/catgory.component";
const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const productList = await getData();
      const data = productList.reduce((acc, item) => {
        const { title, products } = item;
        acc[title.toLowerCase()] = products;
        return acc;
      }, {});
      dispatch(setProducts(data));
    };
    getProducts();
  }, [dispatch]);
  return (
    <div>
      <div className="product-sheet-container">
        <Routes>
          <Route index element={<ProductsPreview />} />
          <Route path=":productType" element={<Category />} />
        </Routes>
      </div>
    </div>
  );
};

export default Product;
