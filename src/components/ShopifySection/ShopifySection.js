import React from "react";
import { Link } from "react-router-dom";

import Button from "../UI/Button";
import ProductsSection from "./ProductsSection";
import classes from "./ShopifySection.module.css";

const ShopifySection = (props) => {
  return (
    <React.Fragment>
      <div className={classes.shopping}>
        <ul>
          <li>Boxes</li>
          <li>
            <Link to="/equipment"><Button>Show all Products</Button></Link>
          </li>
        </ul>
      </div>
      <div className={classes.products}>
        <ProductsSection />
      </div>
    </React.Fragment>
  );
};

export default ShopifySection;
