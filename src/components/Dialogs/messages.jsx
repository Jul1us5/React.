import React from "react";
import style from "./Dialogs.module.scss";
// import {
//   createMessageAction,
//   updateMessageAction,
// } from "../../redux/dialogs-reducer";

let Messages = (props) => {

  // console.log(props.dialogs.messages);

  let MessageDataElement = props.dialogs.messages.map((el, s) => (
    <Message text={el.text} key={s} />
  ));

  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.newMessageText(text);
  };
  console.log(props.dialogs.newMessageText);

  return (
    <aside>
      {MessageDataElement}
      <div className={style.input}>
        <div className={style.who}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoHYtXTchhspak0O8PNPKAPD9Cf08U6284ng&usqp=CAU"
            alt="Avatar"
          />
        </div>
        <textarea
          placeholder="Enter your message"
          className={style.comment}
          value={props.dialogs.newMessageText}
          
          onChange={onMessageChange}
        />
        <button onClick={onAddMessage}></button>
      </div>
    </aside>
  );
};

const Message = (props) => {
  return (
    <div>
      <div>{props.text}</div>
    </div>
  );
};

export default Messages;
