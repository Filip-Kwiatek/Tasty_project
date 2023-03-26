import React from "react";

import classes from "./Slider.module.css";
import SliderPhotos from "./SliderPhotos.js";

const Slider = () => {
  return (
    <div className={classes.slider}>
      <SliderPhotos />
    </div>
  );
};

export default Slider;
