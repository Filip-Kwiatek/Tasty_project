import { useState } from "react";
import { Link } from "react-router-dom";

import SearchBarForm from "./SearchBarForm.js";
import classes from "./SearchBar.module.css";
import SearchBarAd from "./SearchBarAd.js";

const SearchBar = () => {
  const quantity = 0;
  const [ isBasketVisible, setIsBasketVisible ] = useState(false);

  const renderBasketWhenQuantityIsZero = () => {
    if (isBasketVisible) {
      return (
        <li
          className={classes.basket_quantity}
          onClick={() => setIsBasketVisible(false)}
        >
          Close
        <li className={classes.basket_pop_up}>You have {quantity} items in your basket.</li>
        </li>
      )
    }
    return (
      <li
        className={classes.basket_quantity}
        onClick={() => setIsBasketVisible(true)}
      >Basket</li>
    )
  }

  return (
    <div>
      <Link to="/sale">
        <SearchBarAd />
      </Link>
      <ul className={classes.items}>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <SearchBarForm />
        </li>
        <li>
          <Link to="/account">My account</Link>
        </li>
        {quantity === 0 ? renderBasketWhenQuantityIsZero() : (        
          <li
            className={classes.basket}
          >
            <Link to="/basket">Basket</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
