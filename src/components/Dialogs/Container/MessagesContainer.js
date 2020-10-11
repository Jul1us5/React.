import React from "react";
import Messages from "../Messages";
import {
  createMessageAction,
  updateMessageAction,
} from "../../../redux/dialogs-reducer";
import StoreContext from "../../../StoreContext";

let MessagesContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addMessage = () => {
          store.dispatch(createMessageAction());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateMessageAction(text));
        };
        return (
          <Messages
            newMessageText={onMessageChange}
            addMessage={addMessage}
            dialogs={state.dialogs}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
