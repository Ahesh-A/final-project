import "./product.styles.scss";
import { useEffect } from "react";
import { getData } from "../../utils/firebase.utils.js";
import { setProducts } from "../../store/products/products.action";
import { useDispatch } from "react-redux";
import ProductSheet from "../../components/product-sheet/product-sheet.component";
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
        <ProductSheet />
      </div>

      {/* <img src={require("../../assets/women/women1.jpg")} alt="men1" />
      <img src={require("../../assets/men/men1.jpg")} alt="men1" />
      <img src={require("../../assets/shoeformen/shoeformen1.jpg")} alt="men1" />
      <img src={require("../../assets/shoeforwomen/shoeforwomen1.jpg")} alt="men1" />
      <img src={require("../../assets/sunglass/sunglass1.jpg")} alt="men1" /> */}
    </div>
  );
};

export default Product;
