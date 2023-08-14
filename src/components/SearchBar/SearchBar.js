import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SearchBarForm from "./SearchBarForm.js";
import "./SearchBar.css";
import SearchBarAd from "./SearchBarAd.js";

const SearchBar = (props) => {
  const quantity = 0;
  const [isBasketVisible, setIsBasketVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [scroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScroll(window.scrollY > 100);
    });
  }, []);

  const renderBasketWhenQuantityIsZero = () => {
    if (isBasketVisible) {
      return (
        <li
          className={`basket_quantity`}
          onClick={() => setIsBasketVisible(false)}
        >
          Close
          <li className={`basket_pop_up`}>
            You have {quantity} items in your basket.
          </li>
        </li>
      );
    }
    return (
      <li
        className={`basket_quantity`}
        onClick={() => setIsBasketVisible(true)}
      >
        Basket
      </li>
    );
  };
  /*menuVisible ? "items" : "items_static"*/
  // button hide component
  return (
    <div>
      <Link to="/sale">
        <SearchBarAd />
      </Link>
      <ul className={`items`}>
        <li onClick={scrollToTop}>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <SearchBarForm />
        </li>
        <li>
          <Link to="/account">My account</Link>
        </li>
        {quantity === 0 ? (
          renderBasketWhenQuantityIsZero()
        ) : (
          <li className={`basket`}>
            <Link to="/basket">Basket</Link>
          </li>
        )}
        <li>
          <button
            onClick={props.toggleMenu}
            className={`${scroll ? "button_visible" : "button_hidden"}`}
          >
            Show Menu
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SearchBar;
