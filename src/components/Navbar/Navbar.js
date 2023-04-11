import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className={classes.links}>
          <li>
            <Link to="/sale">Sale</Link>
          </li>
          <li>
            <Link to="/equipment">Equipment</Link>
          </li>
          <li>
            <Link to="/edibles">Edibles</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
