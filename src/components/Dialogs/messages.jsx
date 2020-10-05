import React from "react";
import style from "./Dialogs.module.scss";

const Message = (props) => {
  return <span>{props.text}</span>;
};

const Messages = (props) => {
  return (
    <aside>
      <Message text="Hi" />
      <Message text="My name is Julius" />
      <Message text="I creating Single page application" />
      <Message text="React!" />
    </aside>
  );
};

export default Messages;
