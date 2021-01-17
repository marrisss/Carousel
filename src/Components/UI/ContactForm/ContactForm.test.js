import React from "react";

import { shallow, mount } from "enzyme";
import { findByTestAtrr } from "../../../../Utils/index";

import Layout from "../../Layout/Layout";
import ContactForm from "./ContactForm";

describe("Contact Form", () => {
  it('should render correctly in "debug" mode', () => {
    const LayoutComponent = mount(<Layout />);
    const ContactFormComponent = mount(<ContactForm />);
    const node = findByTestAtrr(ContactFormComponent, "close-button");
    node.simulate("click");
    expect(LayoutComponent.state("modal")).toEqual(false);
  });

  
});
