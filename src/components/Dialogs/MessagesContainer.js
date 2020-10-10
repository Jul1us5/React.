import React from "react";
import Messages from "./messages";
import {
  createMessageAction,
  updateMessageAction,
} from "../../redux/dialogs-reducer";

let MessagesContainer = (props) => {

    // console.log(props.store.getState());
    
//   let MessageDataElement = props.messages.messages.map((el, s) => (
//     <Message text={el.text} key={s} />
//   ));
let state = props.store.getState();


  let addMessage = () => {
    props.store.dispatch(createMessageAction());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateMessageAction(text));
  };

  return (
    <Messages newMessageText={onMessageChange} addMessage={addMessage} dialogs={state.dialogs} />
  );
};

// const Message = (props) => {
//   return (
//     <div>
//       <div>{props.text}</div>
//     </div>
//   );
// };

export default MessagesContainer;
