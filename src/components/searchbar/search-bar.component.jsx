import "./search-bar.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { products } from "../../store/products/products.selector";
import { useDispatch } from "react-redux";
import { getSearchProduct, getSearchString } from "../../store/search-product/search-product.selector";
import {
  setSearchProducts,
  setSearchString,
} from "../../store/search-product/search-product.action";

import ProductNameSlice from "../product-name-slice/product-name-slice.component";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchProducts = useSelector(getSearchProduct);
  const currProducts = useSelector(products);
  const searchString = useSelector(getSearchString);
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(setSearchString(value));
    if (value) {
      console.log(value);
      const acc = [];
      Object.values(currProducts).forEach((category) => {
        Object.values(category).forEach((product) => {
          if (product.name.toLowerCase().includes(value.toLowerCase()))
            acc[product.id] = product;
        });
      }, {});
      dispatch(setSearchProducts(acc));
      console.log(acc);
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="product-categories">
          <span> All Category</span>
          <FontAwesomeIcon icon={solid("chevron-down")} />
        </div>

        <form action="submit">
          <input
            type="search"
            placeholder="search item"
            value={searchString}
            onChange={onChangeHandler}
          />
          <button>
            <FontAwesomeIcon icon={solid("magnifying-glass")} />
          </button>
        </form>
      </div>
      {searchString !== "" && <ProductNameSlice products={searchProducts} />}
    </div>
  );
};

export default SearchBar;
