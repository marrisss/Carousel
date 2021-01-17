import React from "react";
import { shallow, mount } from "enzyme";

import RadioIndicators from "./RadioIndicators/RadioIndicators";

const setUp = (props = {}) => {
  const component = shallow(<RadioIndicators {...props} />);
  return component;
};

it("should call mockFunction on button click", () => {

});


