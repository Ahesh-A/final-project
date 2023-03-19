import "./search-result.styles.scss";
import { useSelector } from "react-redux";
import { getSearchProduct } from "../../store/search-product/search-product.selector";
import ProductCard from "../../components/product-card/productcard.component";
const SearchResult = () => {
  const products = useSelector(getSearchProduct);
  console.log(Object.values(products));
  return (
    <div className="search-result-container">
      <h2>This is search result</h2>
      <div className="search-result-produt-card-container">
        {products &&
          Object.values(products).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default SearchResult;
