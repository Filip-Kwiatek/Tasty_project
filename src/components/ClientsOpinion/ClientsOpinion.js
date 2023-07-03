import React from "react";

import classes from "./ClientsOpinion.module.css";
import Opinion from "./Opinion";

const ClientsOpinion = () => {
  return (
    <section className={classes.title}>
      <h2>Let customers speak for us</h2>
      <span>★★★★★</span>
      <div>from 1200 comments</div>
      <section className={classes.opinions}>
        <Opinion />
      </section>
    </section>
  );
};

export default ClientsOpinion;
