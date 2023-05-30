import React from "react";
import { Link } from "react-router-dom";

import Button from "../UI/Button";
import ProductsSection from "./ProductsSection";
import classes from "./ShopifySection.module.css";

const ShopifySection = (props) => {
  const titleText = props.titleTextForShopSection;
  const photos = props.photosForShopSection;
  const photosOnHover = props.photosOnHoverForShopSection;

  const price = props.pricesForShopSection;
  const rate = props.rateForShopSection;
  return (
    <React.Fragment>
      <div className={classes.shopping}>
        <ul>
          <li>{titleText}</li>
          <li>
            <Link to="/equipment">
              <Button>Show all Products</Button>
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.products}>
        <ProductsSection
          photos={photos}
          photosOnHover={photosOnHover}
          price={price}
          rate={rate}
        />
      </div>
    </React.Fragment>
  );
};

export default ShopifySection;
