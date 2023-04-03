import React from "react";

import Button from "../UI/Button";
import ShopifyProduct from "./ShopifyProduct";
import classes from "./ShopifySection.module.css";

const ShopifySection = (props) => {
  return (
    <React.Fragment>
      <div className={classes.shopping}>
        <ul>
          <li>Specific kind of products 1</li>
          <li>
            <Button>Show all Products</Button>
          </li>
        </ul>
      </div>
      <div className={classes.products}>
        <ul>
          <ShopifyProduct/>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ShopifySection;
