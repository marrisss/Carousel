import React from "react";

import NavItem from "./NavItem/NavItem.js";
import classes from "./NavItems.module.css";

const navItems = (props) => {
  return (
    <div className={classes.NavItems}>
      <NavItem title="About" />
      <NavItem title="Blog" />
      <NavItem title="Careers" />
      <NavItem title="Contact" showModal={props.showModal} />
    </div>
  );
};

export default navItems;
