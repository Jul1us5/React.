import React from "react";
import style from "./Dialogs.module.scss";
import Messages from "./messages";
import Author from "./Author";

const Dialogs = (props) => {
  return (
    <section className={style.messages}>
      <Author authors={props.state.authors} />
      <Messages messages={props.state.messages} />
    </section>
  );
};

export default Dialogs;
