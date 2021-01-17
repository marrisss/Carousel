import React, { Component } from "react";

import classes from "./Carousel.module.css";
import img1 from "../../../assets/images/Group.png";
import img2 from "../../../assets/images/Group-2.png";
import RadioIndicators from "./RadioIndicators/RadioIndicators";
import Content from "./Content/Content";

class Carousel extends Component {
  state = {
    images: [img1, img2],
    currentImage: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((prev) => {
        let i = prev.currentImage;
        i = (i + 1) % 2;
        return { currentImage: i };
      });
    }, 3000);
  }

  imageClickHandler = (idx) => {
    this.setState({ currentImage: idx });
  };

  render() {
    return (
      <div className={classes.Carousel}>
        <div className={classes.Slider}>
          <img
            className={classes.Image}
            src={this.state.images[this.state.currentImage]}
            alt="Cat-N-Dog"
          />
          <Content />
          <RadioIndicators
            slide={this.imageClickHandler}
            id={this.state.currentImage}
            data-test="radio"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
