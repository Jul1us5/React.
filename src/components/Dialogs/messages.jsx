import React from "react";
import style from "./Dialogs.module.scss";
import { createMessageAction, updateMessageAction } from "../../redux/state"




let Messages = (props) => {

  let MessageDataElement = props.messages.messages.map((el, s) => (
    <Message text={el.text} key={s} />


    
  ));



  
  let addMessage = () => {
    props.dispatch(createMessageAction());
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateMessageAction(text));
  }

  return <aside>
      {MessageDataElement}
      <div className={style.input}>
            <div className={style.who}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoHYtXTchhspak0O8PNPKAPD9Cf08U6284ng&usqp=CAU" alt="Avatar"/>
            </div>
            <textarea placeholder='Enter your message' className={style.comment} value={props.messages.newMessageText} onChange={onMessageChange}/>
            <button onClick={addMessage}></button>
      </div>
  </aside>;
};

const Message = (props) => {
  
  return (
    <div>
      <div>{props.text}</div>
    </div>
  );
};

export default Messages;
