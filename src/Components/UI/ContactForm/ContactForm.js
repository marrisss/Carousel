import React, { useState } from "react";

import classes from "./ContactForm.module.css";
import Input from "./InputItems/InputItems";
import Icons from "./SocialIcons/SocialIcons";
import Close from "../../../assets/svg/Close.svg";
import { useMutation, gql } from "@apollo/client";

const CREATE_LINK_MUTATION = gql`
  mutation sendNewMessage($email: String!, $message: String!, $name: String!) {
    sendMessage(email: $email, message: $message, name: $name) {
      message
    }
  }
`;

const ContactForm = (props) => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      email: message.email,
      message: message.message,
      name: message.name,
    },
  });


  const onChangehandler = (e) => {
    const title = e.target.title;
    const value = e.target.value;

    setMessage({
      ...message,
      [title]: value,
    });
    console.log(message);
  };
  return (
    <div className={classes.Box}>
      <div className={classes.Close} onClick={props.clicked}>
        <img src={Close} alt={"close"} />
      </div>
      <div className={classes.Contact}>Contact</div>
      <div className={classes.Paragraph}>
        Lorem Ipsum simply dummy tesxt for printing
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <Input
          title={"name"}
          placeholder={"Enter your name here"}
          onChange={onChangehandler}
        />
        <Input
          title={"email"}
          placeholder={"Enter your e-mail address here"}
          onChange={onChangehandler}
        />
        <Input
          title={"message"}
          placeholder={"Wanna share something with us?"}
          onChange={onChangehandler}
        />
        <button onClick={props.clicked} className={classes.Button}>
          <div className={classes.Text}>Submit</div>
        </button>
      </form>
      <div className={classes.Footer}>
        <div>Need More info? hello@newzera.com</div>
        <Icons />
      </div>
    </div>
  );
};

export default ContactForm;
