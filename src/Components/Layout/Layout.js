import React, { Component } from "react";

import classes from "./Layout.module.css";
import Logo from "./Logo/Logo";
import NavItems from "./NavItems/NavItems";
import Modal from "../UI/Modal/Modal";
import ContactForm from "../UI/ContactForm/ContactForm";

class Navbar extends Component {
  state = {
    modal: false,
  };

  modalOpenHandler = () => {
    this.setState({ modal: true });
  };

  modalClosedHandler = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <div data-test = 'nav-bar' className={classes.Navbar}>
        <Modal show={this.state.modal} modalClosed={this.modalClosedHandler}>
          <ContactForm clicked={this.modalClosedHandler} />
        </Modal>
        <Logo />
        <NavItems showModal={this.modalOpenHandler} />
      </div>
    );
  }
}

export default Navbar;
