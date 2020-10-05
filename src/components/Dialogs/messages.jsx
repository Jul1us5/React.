import React from "react";
import style from "./Dialogs.module.scss";

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

const Message = (props) => {
  return (
    <div>
      <div>{props.text}</div>
    </div>
  );
};

let MessageDataElement = MessageData.map((el, i) => (
  <Message text={el.text} key={i} />
));

const Messages = (props) => {
  return <aside>{MessageDataElement}</aside>;
};

export default Messages;
