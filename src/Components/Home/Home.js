import React from "react";

import Carousel from "./Carousel/Carousel";
import LeftSideBar from "./LeftSideBar/LeftSideBar";

import classes from "./Home.module.css";

const home = () => {
  return (
    <div className={classes.Home}>
      <LeftSideBar />
      <Carousel />
    </div>
  );
};

export default home;
