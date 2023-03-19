import "./search-result.styles.scss";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { getSearchProduct } from "../../store/search-product/search-product.selector";
import ProductCard from "../../components/product-card/productcard.component";
import { ReactComponent as NoResults } from "../../assets/icon/no-results.svg";
const SearchResult = () => {
  const products = useSelector(getSearchProduct);

  console.log(Object.values(products).length);
  return (
    <div className="search-result-container">
      {Object.values(products).length === 0 ? (
        <div className="no-results-container">
          <div className="no-results-icon-container">
            <NoResults />
          </div>
          <div className="no-results">
            No results found 
            <span className = "no-results-dot">

            </span>
            </div>
        </div>
      ) : (
        <Fragment>
          <h2 className="search-result-heading">
            Search Results
            <div className="divider"></div>
          </h2>
          <div className="search-result-produt-card-container">
            {products &&
              Object.values(products).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default SearchResult;
