import React from "react";
import style from "./Dialogs.module.scss";

const Message = (props) => {
  return (
    <div>
      <div>{props.text}</div>
    </div>
  );
};

const Input = () => {
  return (
    <div className={style.input}>
          <div className={style.who}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoHYtXTchhspak0O8PNPKAPD9Cf08U6284ng&usqp=CAU" alt="Avatar"/>
          </div>
          <textarea className={style.comment}></textarea>
          <button></button>
    </div>
  );
}

const Messages = (props) => {
  let MessageDataElement = props.messages.map((el, i) => (
    <Message text={el.text} key={i} />
  ));

  return <aside>
      {MessageDataElement}
      <Input />
  </aside>;
};

export default Messages;
