import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/equipment"><Button>Show all Products</Button></Link>
          </li>
        </ul>
      </div>
      <div className={classes.products}>
        <ShopifyProduct />
      </div>
    </React.Fragment>
  );
};

export default ShopifySection;
