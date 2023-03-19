import "./favourites.styles.scss";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { selectFavourites } from "../../store/favourites/favourites.selector";
import ProductCard from "../../components/product-card/productcard.component";
import { ReactComponent as NoResults } from "../../assets/icon/no-results.svg";
const Favourties = () => {
  const products = useSelector(selectFavourites);

  console.log(Object.values(products).length);
  return (
    <div className="fav-result-container">
      {Object.values(products).length === 0 ? (
        <div className="fav-results-container">
          <div className="no-fav-results-icon-container">
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
            Favourites
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

export default Favourties;
