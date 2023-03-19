import "./search-bar.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { products } from "../../store/products/products.selector";
import { useDispatch } from "react-redux";
import {
  getSearchProduct,
  getSearchString,
} from "../../store/search-product/search-product.selector";
import {
  setSearchProducts,
  setSearchString,
} from "../../store/search-product/search-product.action";

import ProductNameSlice from "../product-name-slice/product-name-slice.component";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchProducts = useSelector(getSearchProduct);
  const currProducts = useSelector(products);
  const searchString = useSelector(getSearchString);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    console.log("In func", searchString);
    const acc = [];
    if (searchString && searchString !== "") {
      console.log(searchString);
      Object.values(currProducts).forEach((category) => {
        Object.values(category).forEach((product) => {
          if (product.name.toLowerCase().includes(searchString.toLowerCase()))
            acc[product.id] = product;
        });
      });
      dispatch(setSearchProducts(acc));
    } else {
      dispatch(setSearchProducts([]));
    }
  }, [searchString, dispatch]);

  const searchClickHandler = (e) => {
    e.preventDefault();
    navigate("search-results");
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(setSearchString(value));
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="product-categories">
          <span> All Category</span>
          <FontAwesomeIcon icon={solid("chevron-down")} />
        </div>

        <form action="submit" onSubmit={searchClickHandler}>
          <input
          className="search-bar-input"
            type="search"
            placeholder="search item"
            value={searchString}
            onChange={onChangeHandler}
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setTimeout(() => {setFocus(false);}, 1000)
              
            }}
          />
          <button>
            <FontAwesomeIcon icon={solid("magnifying-glass")} />
          </button>
        </form>
      </div>
      {focus && <ProductNameSlice products={searchProducts} />}
    </div>
  );
};

export default SearchBar;
