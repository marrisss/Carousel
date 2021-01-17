import React from "react";

import { mount } from "enzyme";
import { findByTestAtrr } from "../../../../../Utils/index";

import NavItem from "./NavItem";

const mockFn = jest.fn();

describe("NavItem", () => {
  it('should render correctly in "debug" mode', () => {
    const Component = mount(<NavItem onClick={mockFn} title="Contact" />);
    const node = findByTestAtrr(Component, "Contact");
    node.simulate("click");
    expect(mockFn).toHaveBeenCalled();
    Component.unmount();
  });
});
