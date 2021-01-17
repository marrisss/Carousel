import React from "react";
import { mount } from "enzyme";
import { findByTestAtrr } from "../../../Utils/index";

import Layout from "./Layout";
import Backdrop from "../UI/Backdrop/Backdrop";

const setUp = (props = {}) => {
  const component = mount(<Layout {...props} />);
  return component;
};

describe("Check Modal Value toggle", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render contact button", () => {
    const wrapper = findByTestAtrr(component, "Contact").text();
    expect(wrapper).toBe("Contact");
  });

  it("should modal value be true on clicking", () => {
    const wrapper = findByTestAtrr(component, "Contact");
    wrapper.simulate("click");
    expect(component.state("modal")).toEqual(true);
  });

  it("should modal value be false on clicking", () => {
    const componentBackdrop = mount(<Backdrop show={true} />);
    const wrapper = findByTestAtrr(componentBackdrop, "backdrop");
    wrapper.simulate("click");
    expect(component.state("modal")).toEqual(false);
  });

});
