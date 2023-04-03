import React from "react";

import classes from "./ShopifyProduct.module.css";

const ShopifyProduct = () => {
  return (
    <div className={classes.item}>
      <img 
        src="https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_5.jpg?v=1673222123"
        alt="Tasty food"
      />
      <p>Valuable product</p>
      <p>Rate</p>
      <p>Price</p>
    </div>
  );
};

export default ShopifyProduct;
