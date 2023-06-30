import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./FlagshipProductsSection.module.css";

const FlagshipProductsSection = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-LUNCHBOX-GLASS-PLUS-Szklany-Pojemnik-640ml.jpg?v=1643921561&width=540"
  );

  const [description, setDescription] = useState(
    "Glass food container - 640ml - glass lid"
  );
  const [opinion, setOpinion] = useState("5 ★");
  const [price, setPrice] = useState("5");
  const [website, setWebsite] = useState("lunchboxes");

  const fruitImage = () => {
    setImageUrl(
      "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-LUNCHBOX-GLASS-PLUS-Szklany-Pojemnik-pokrywa-370ml.jpg?v=1643925775&width=540",
      setDescription("Glass food container - 370ml - glass lid"),
      setOpinion("5 ★"),
      setPrice("5"),
      setWebsite("Glass food container - 370ml - glass lid")
    );
  };

  const tortillasImage = () => {
    setImageUrl(
      "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-LUNCHBOX-GLASS-PLUS-Szklany-Pojemnik-pokrywa-640ml.jpg?v=1643921561&width=540",
      setDescription("Glass food container - 640ml - glass lid"),
      setOpinion("5 ★"),
      setPrice("5"),
      setWebsite("Glass food container - 640ml - glass lid")
    );
  };

  const sandwichesImage = () => {
    setImageUrl(
      "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-LUNCHBOX-GLASS-PLUS-Szklany-Pojemnik-800ml.jpg?v=1643929433&width=540",
      setDescription("Glass food container - 800ml - glass lid"),
      setOpinion("5 ★"),
      setPrice("5"),
      setWebsite("Glass food container - 800ml - glass lid")
    );
  };

  const fishImage = () => {
    setImageUrl(
      "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-LUNCHBOX-GLASS-PLUS-Szklany-Pojemnik-pokrywa.jpg?v=1643915560&width=540",
      setDescription("Glass food container - 1050ml - glass lid"),
      setOpinion("5 ★"),
      setPrice("5"),
      setWebsite("Glass food container - 1050ml - glass lid")
    );
  };

  return (
    <section className={classes.products}>
      <h2>Check out flagship Szama products</h2>
      <section className={classes.productsWrapper}>
        <section className={classes.imageMap}>
          <img
            src="//cdn.shopify.com/s/files/1/0559/7881/9741/files/Policzona_Szama_LunchBOXy_glass_pluss_Image_baner_47307cdd-ee78-4930-a0b6-84ecf66d61cf.jpg?v=1679414427&width=2400"
            alt="food in lunchbox"
          />
          <ul className={classes.icons}>
            <li className={classes.fruits} onClick={fruitImage}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/181/181592.png"
                alt="shopping_basket"
              />
            </li>
            <li className={classes.tortillas} onClick={tortillasImage}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/181/181592.png"
                alt="shopping_basket"
              />
            </li>
            <li className={classes.sandwiches} onClick={sandwichesImage}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/181/181592.png"
                alt="shopping_basket"
              />
            </li>
            <li className={classes.fish} onClick={fishImage}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/181/181592.png"
                alt="shopping_basket"
              />
            </li>
          </ul>
        </section>
        <section className={classes.singleProduct}>
          <Link to={`/` + website}>
            <img src={imageUrl} alt="lunchbox" />
          </Link>
          <ul className={classes.text}>
            <li>{description}</li>
            <li>Opinion: {opinion}</li>
            <li>Price: {price} $</li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default FlagshipProductsSection;
