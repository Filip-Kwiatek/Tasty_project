import React from "react";

import classes from "./ShopifyProduct.module.css";

const ShopifyProduct = (props) => {
  const shopping = [
    {
      id: 0,
      img: "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_5.jpg?v=1673222123",
      description: "Description",
      rate: 5,
      price: "10$",
    },
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_5.jpg?v=1673222123",
      description: "Description",
      rate: 5,
      price: "10$",
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_5.jpg?v=1673222123",
      description: "Description",
      rate: 5,
      price: "10$",
    },
    {
      id: 3,
      img: "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_5.jpg?v=1673222123",
      description: "Description",
      rate: 5,
      price: "10$",
    }, 
  ];
  const shopList = shopping.map((shop) => (
    <li key={shop.id}>
      <p>
        <img src={shop.img} alt="Tasty food" />
      </p>
      <p>Rate: {shop.rate}</p>
      <p>Price: {shop.price}</p>
    </li>
  ));
  return (
    <div>
      <ul className={classes.item}>{shopList}</ul>
    </div>
  );
};

export default ShopifyProduct;
