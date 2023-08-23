import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBarForm from "./SearchBarForm.js";
import SearchBarAd from "./SearchBarAd.js";
import styles from "./SearchBar.module.css";

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
      console.log(scroll);
    });
  });

  const renderBasketWhenQuantityIsZero = () => {
    if (isBasketVisible) {
      return (
        <li
          className={styles.basket_quantity}
          onClick={() => setIsBasketVisible(false)}
        >
          Close
          <li className={styles.basket_pop_up}>
            You have {quantity} items in your basket.
          </li>
        </li>
      );
    }
    return (
      <li
        className={styles.basket_quantity}
        onClick={() => setIsBasketVisible(true)}
      >
        Basket
      </li>
    );
  };
  /*menuVisible ? "items" : "items_static"*/
  // button hide component
  return (
    <nav className={styles.root}>
      <Link to="/sale">
        <SearchBarAd />
      </Link>
      <ul className={styles.items}>
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
          <li className={styles.basket}>
            <Link to="/basket">Basket</Link>
          </li>
        )}
        <li>
          {!props.isNavbarShown && (
            <button
              onClick={() => {
                props.handleShowMenu();
              }}
              className={styles.button_visible}
            >
              Show Menu
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default SearchBar;
