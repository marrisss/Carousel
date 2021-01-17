import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../../Utils/index";

import LeftSideBar from "./LeftSideBar";

const setUp = (props = {}) => {
  const component = shallow(<LeftSideBar {...props} />);
  return component;
};

describe("LeftSideBar", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render correctly in "debug" mode', () => {
    const wrapper = findByTestAtrr(component, "leftSideBar");
    expect(wrapper.length).toBe(1);
  });
  it('should render correctly in "debug" mode', () => {
    const wrapper = findByTestAtrr(component, "boldText");
    expect(wrapper.length).toBe(1);
  });
  it('should render correctly in "debug" mode', () => {
    const wrapper = findByTestAtrr(component, "lightText");
    expect(wrapper.length).toBe(1);
  });
  it('should render correctly in "debug" mode', () => {
    const wrapper = findByTestAtrr(component, "logo");
    expect(wrapper.length).toBe(2);
  });
});
