import React from "react";

import classes from "./SearchBarForm.module.css";

const SearchBarForm = () => {
  return (
    <form className={classes}>
      <input type="text" placeholder="Search for" />
    </form>
  );
};

export default SearchBarForm;
