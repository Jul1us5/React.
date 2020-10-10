import React from "react";
import Messages from "../Messages";
import {
  createMessageAction,
  updateMessageAction,
} from "../../../redux/dialogs-reducer";

let MessagesContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(createMessageAction());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateMessageAction(text));
  };

  return (
    <Messages
      newMessageText={onMessageChange}
      addMessage={addMessage}
      dialogs={state.dialogs}
    />
  );
};

export default MessagesContainer;
