import React from "react";
import { shallow, mount } from "enzyme";
import { findByTestAtrr } from "../../../../../../Utils/index";

import RadioIndicator from "./RadioIndicator";

const setUp = (props = {}) => {
  const component = shallow(<RadioIndicator {...props} />);
  return component;
};

describe("RadioIndicator", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render correctly in "debug" mode', () => {
    const wrapper = findByTestAtrr(component, "radio");
    expect(wrapper.length).toBe(1);
  });


});


