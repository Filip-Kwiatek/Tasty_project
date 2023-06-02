import React from "react";
import { Link } from "react-router-dom";

import classes from "./FavoriteCategoriesSection.module.css";

const FavoriteCategoriesSection = () => {
  return (
    <div className={classes}>
      <header>Your Favorite Categories</header>
      <ul className={classes.categories}>
        <Link to="/">
          <li>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-LUNCHBOX-GLASS-PLUS-Szklany-Pojemnik-640ml.jpg?v=1643921561&width=720"
              alt="lunch box"
            />
            Boxes
          </li>
        </Link>
        <Link to="/">
          <li>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7881/9741/products/WOKPoliczonaSzama8-1-1.jpg?v=1671359837&width=720"
              alt="Pan"
            />
            Pans
          </li>
        </Link>
        <Link to="/">
          <li>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7881/9741/products/ZestawprzyprawPoliczonaSzama.jpg?v=1639427887&width=720"
              alt="Spices"
            />
            Spices
          </li>
        </Link>
        <Link>
          <li>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Garnek_zeliwny_HIERRO_24x10cm_3_5l-FOTO.jpg?v=1637247201&width=720"
              alt="Pot"
            />
            Pots
          </li>
        </Link>
        <Link to="/">
          <li>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7881/9741/products/PoliczonaSzamaMozdzierzkuchennyaranz.jpg?v=1651312275&width=720"
              alt="Kitchen mortar"
            />
            Kitchen accessories
          </li>
        </Link>
        <Link to="/">
          <li>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Lyzka_miarka_zestaw.jpg?v=1649595184&width=720"
              alt="Kitchen measuring cups"
            />
            Helpful equipment
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default FavoriteCategoriesSection;
