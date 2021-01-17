import React from "react";

import classes from "./InputItems.module.css";

const inputItems = (props) => {
  return (
    <div className={classes.InputField}>
      <div className={classes.Content}>
        <strong>{props.title}</strong>
      </div>
      <input
        title={props.title}
        onChange={props.onChange}
        className={classes.Input}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default inputItems;
