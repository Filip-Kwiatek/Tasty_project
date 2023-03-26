import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className={classes.links}>
          <li>
            <a href="/#">Promocje</a>
          </li>
          <li>
            <a href="/#">Wyposażenie kuchni</a>
          </li>
          <li>
            <a href="/#">Żywność</a>
          </li>
          <li>
            <a href="/#">Przepisy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
