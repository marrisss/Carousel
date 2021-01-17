import React from "react";

import classes from "./RadioIndicator.module.css";

const radioIndicator = (props) => {
  let ext = {};

  if (props.current !== props.actual) {
    ext = {
      height: "8px",
      width: "8px",
      opacity: "50%",
    };
  }

  return (
    <div data-test='radio' onClick={props.clicked} className={classes.Radio} style={ext}></div>
  );
};

export default radioIndicator;
