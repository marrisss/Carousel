import React from "react";

import Logo from "../../../assets/images/Cat-N-Dog-Logo-copy.png";

import classes from "./Logo.module.css";

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={Logo} alt="Logo" />
    </div>
  );
};

export default logo;
