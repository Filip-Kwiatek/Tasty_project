import React from "react";

import classes from "./FavoriteCategoriesSection.module.css";

const FavoriteCategoriesSection = () => {
  return (
    <div className={classes}>
      <header>Your favorite categories</header>
      <ul>
        <li>
          <img />
          Boxes
        </li>
        <li>
          <img />
          Pans
        </li>
        <li>
          <img />
          Spices
        </li>
        <li>
          <img />
          Pots
        </li>
        <li>
          <img />
          Kitchen accessories
        </li>
        <li>
          <img />
          Helpful equipment
        </li>
      </ul>
    </div>
  );
};

export default FavoriteCategoriesSection;
