import React from "react";
import style from "./Dialogs.module.scss";
// import Messages from "./messages";
import MessagesContainer from "./MessagesContainer";
import Author from "./Author";

const Dialogs = (props) => {
  // console.log(props.state.getState().dialogs.authors);
  return (
    <section className={style.messages}>
      {/* <Author authors={props.state.dialogs.authors} /> */}
      {/* <Messages messages={props.state.dialogs} dispatch={props.dispatch}/> */}
      <MessagesContainer store={props.store}/>
    </section>
  );
};

export default Dialogs;


// newMessageText={props.state.dialogs.newMessageText}