import React from "react";
import { Link } from "react-router-dom";

import classes from "./VideoSection.module.css";

const VideoSection = () => {
  return (
    <Link to="/YouTubeLink">
      <div className={classes.screen}>
        <div className={classes.paragraphs}>
          <p>Prepare meals with Szama</p>
          <p>Join to us in order to make your life better and healthier!</p>
        </div>
        <video autoPlay muted loop className={classes.video}>
          <source
            src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov"
            autoplay
            loop
            playsinline
            muted
          />
        </video>
      </div>
    </Link>
  );
};

export default VideoSection;
