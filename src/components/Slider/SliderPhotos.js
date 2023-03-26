import React from "react";
import SliderText from "./SliderText";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import classes from "./SliderPhotos.module.css";

const SliderPhotos = () => {
  const images = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_5.jpg?v=1673222123",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/files/Pad_Thai_-_prosty_przepis_Policzona_Szama_blog.jpg?v=1669244451",
  ];

  return (
    <div className={classes.frame}>
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
