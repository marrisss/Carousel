import React from "react";

import classes from "./SocialIcons.module.css";
import fb from "../../../../assets/images/FB.png";
import tt from "../../../../assets/images/TT.png";
import li from "../../../../assets/images/LI.png";

const icons = () => {
  return (
    <div className={classes.Icons}>
      <img src={fb} alt={"facebook"} />
      <img src={li} alt={"linkedin"} />
      <img src={tt} alt={"twitter"} />
    </div>
  );
};

export default icons;
