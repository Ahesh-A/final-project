import { useParams } from "react-router-dom";
import ProductOverView from "../../routes/product-overview/product-overview.component";
import Category from "../category/catgory.component";
import { useSelector } from "react-redux";
import { products } from "../../store/products/products.selector";
const ProductOrCategory = () => {
  const { prodOrCat } = useParams();
  const cartproducts = useSelector(products);
  
  return (
    <div>
      {cartproducts[prodOrCat] ? (
        <Category productType={prodOrCat} />
      ) : (
        <ProductOverView productId = {prodOrCat}/>
      )}
    </div>
  );
};

export default ProductOrCategory;
