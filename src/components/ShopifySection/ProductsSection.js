import { useState } from "react";

import classes from "./ProductsSection.module.css";
import { Link } from "react-router-dom";

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
            src={isOnHover ? props.photoUrlOnHover : props.photoUrl}
            onMouseOut={() => setIsOnHover(true)}
            onMouseOver={() => setIsOnHover(false)}
            /*style={{
              backgroundImage: `url(${props.img})`
            }}*/
            alt="Tasty food"
          />
        </Link>
      </p>
      <p>Rate: {props.rate}★</p>
      <p>Price: {props.price}$</p>
    </li>
  );
};

const ProductsSection = (props) => {
  const shopList = props.photos.map((url, index) => (
    <Item
      key={url}
      photoUrl={url}
      photoUrlOnHover={props.photosOnHover[index]}
      price={props.price[index]}
      rate={props.rate[index]}
    />
  ));

  /*
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => response.json())
      .then((json) => json.map(el => ({
        id: el.id,
        title: el.title,
        rate: el.id, 
        price: el.userId
      })))
      .then((transformedJson) => {
        setItems(transformedJson)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  */

  return (
    <div>
      <ul className={classes.items}>{shopList}</ul>
    </div>
  );
};

export default ProductsSection;
