import React from "react";
import style from "./Dialogs.module.scss";

const Message = (props) => {
  return (
    <div>
      <div>{props.text}</div>
    </div>
  );
};

const Messages = (props) => {

  let MessageDataElement = props.MessageData.map((el, i) => (
    <Message text={el.text} key={i} />
  ));

  return <aside>{MessageDataElement}</aside>;
};

export default Messages;
