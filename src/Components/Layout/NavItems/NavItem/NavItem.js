import React from "react";

import classes from "./NavItem.module.css";

const navItem = (props) => {
  return (
    <div data-test = {props.title} className={classes.NavItem} onClick={props.showModal}>
      {props.title}
    </div>
  );
};

export default navItem;
