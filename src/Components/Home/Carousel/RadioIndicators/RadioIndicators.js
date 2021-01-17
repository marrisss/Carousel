import React from "react";

import classes from "./RadioIndicators.module.css";
import RadioIndicator from "./RadioIndicator/RadioIndicator";

const radioIndicators = (props) => {
  return (
    <div className={classes.RadioIndicators}>
      <RadioIndicator
        clicked={() => props.slide(0)}
        current={props.id}
        actual={0}
      />
      <RadioIndicator
        clicked={() => props.slide(1)}
        current={props.id}
        actual={1}
      />
    </div>
  );
};

export default radioIndicators;
