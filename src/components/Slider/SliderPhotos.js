import React from "react";
import SliderText from "./SliderText";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import classes from "./SliderPhotos.module.css";

const SliderPhotos = (props) => {
  const images = props.photosForSlider;
  return (
    <div className={classes.container}>
      <Slide
        slidesToScroll={2}
        slidesToShow={2}
        indicators={false}
        autoplay={true}
      >
        <div className={classes.slider}>
          <div style={{ backgroundImage: `url(${images[0]})` }}></div>
        </div>
        <div className={classes.slider}>
          <SliderText />
        </div>
        <div className={classes.slider}>
          <div style={{ backgroundImage: `url(${images[1]})` }}></div>
        </div>
        <div className={classes.slider}>
          <SliderText />
        </div>
      </Slide>
    </div>
  );
};

export default SliderPhotos;
