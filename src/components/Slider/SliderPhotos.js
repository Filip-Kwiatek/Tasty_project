import React from "react";
import SliderText from "./SliderText";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import classes from "./SliderPhotos.module.css";

const SliderPhotos = (props) => {
  const images = props.photosForSlider;
  const mainText = props.mainTextForSlider;
  const headerText = props.headerTextForSlider;
  const descriptionText = props.descriptionTextForSlider;
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
          <SliderText mainText={mainText[0]} headerText={headerText[0]} descriptionText={descriptionText[0]}/>
        </div>
        <div className={classes.slider}>
          <div style={{ backgroundImage: `url(${images[1]})` }}></div>
        </div>
        <div className={classes.slider}>
          <SliderText mainText={mainText[1]} headerText={headerText[1]} descriptionText={descriptionText[1]}/>
        </div>
      </Slide>
    </div>
  );
};

export default SliderPhotos;
