import React from "react";
import style from "./Dialogs.module.scss";
import MessagesContainer from "./Container/MessagesContainer";
import AuthorContainer from "./Container/AuthorContainer";

const Dialogs = (props) => {
  return (
    <section className={style.messages}>
      <AuthorContainer store={props.store} />
      <MessagesContainer store={props.store} />
    </section>
  );
};

export default Dialogs;
