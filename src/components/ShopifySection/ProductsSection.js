import { useState } from "react";

import classes from "./ProductsSection.module.css";
import { Link } from "react-router-dom";
import items from "./items"

const Item = (props) => {
  const [isOnHover, setIsOnHover] = useState(false);

  return (
    <li>
      <p>
        <Link to="/recipes">
          {/* <div className={classes.image}>
            <div className={classes.normalImage} style={{
              backgroundImage: `url(${props.img})`
            }}></div>
            <div className={classes.hoverImage} style={{ 
              backgroundImage: `url(${props.imgOnHover})`
            }}></div>
          </div> */}
          <img
            src={isOnHover ? props.img : props.imgOnHover}
            onMouseOut={() => setIsOnHover(true)}
            onMouseOver={() => setIsOnHover(false)}
            /*style={{
              backgroundImage: `url(${props.img})`
            }}*/
            alt="Tasty food"
          />
        </Link>
      </p>
      <p>Rate: {props.rate} ★</p>
      <p>Price: {props.price}</p>
    </li>
  )
}

const ProductsSection = () => {
  const shopList = items.map((item) => (
    <Item
      key={item.id}
      {...item}
    />
  ));
  return (
    <div>
      <ul className={classes.items}>{shopList}</ul>
    </div>
  );
};

export default ProductsSection;
