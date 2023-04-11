import React from "react";
import { Link } from "react-router-dom";

import SearchBarForm from "./SearchBarForm.js";
import classes from "./SearchBar.module.css";
import SearchBarAd from "./SearchBarAd.js";

const SearchBar = () => {
  return (
    <div>
      <Link to="/sale"><SearchBarAd /></Link>
      <ul className={classes.items}>
        <li><Link to="/">LOGO</Link></li>
        <li>
          <SearchBarForm />
        </li>
        <li><Link to="/account">My account</Link></li>
        <li><Link to="/basket">Basket</Link></li>
      </ul>
    </div>
  );
};

export default SearchBar;
