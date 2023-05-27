import React from "react";
import { Link } from "react-router-dom";
import classes from "./SliderText.module.css";

const SliderText = (props) => {
  return (
    <div className={classes.text}>
      <header className={classes.header}>{props.headerText}</header>
      <main className={classes.mainText}>{props.mainText}</main>
      <div className={classes.descriptionText}>{props.descriptionText}</div>
      <Link to="/bowls"><button className={classes.button}>see all</button></Link>
    </div>
  );
};

export default SliderText;
