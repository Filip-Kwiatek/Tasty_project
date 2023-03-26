import React from "react";

import SearchBarForm from "./SearchBarForm.js";
import classes from "./SearchBar.module.css";
import SearchBarAd from "./SearchBarAd.js";

const SearchBar = () => {
  return (
    <div>
      <SearchBarAd />
      <ul className={classes.items}>
        <li>LOGO</li>
        <li>
          <SearchBarForm />
        </li>
        <li>My account</li>
        <li>Basket</li>
      </ul>
    </div>
  );
};

export default SearchBar;
