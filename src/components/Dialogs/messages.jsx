import React from "react";
import style from "./Dialogs.module.scss";

const Message = (props) => {
  return <span>{props.text}</span>;
};

const Messages = (props) => {
  let MessageData = [
    {
      id: 1,
      text: "Hi",
    },
    {
      id: 2,
      text: "My name is Julius",
    },
    {
      id: 3,
      text: "I creating Single page application",
    },
    {
      id: 4,
      text: "React!",
    },
  ];

  let MessageDataElement = MessageData.map((el,i) => <Message key={i} text={el.text} />);

  return <aside>{MessageDataElement}</aside>;
};

export default Messages;
