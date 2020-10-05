import React from "react";
import style from "./Dialogs.module.scss";
import Messages from "./messages";
import Author from "./Author";


const Dialogs = (props) => {

  return (
    <section className={style.messages}>
      <Author AuthorData={props.AuthorData}/>
      <Messages MessageData={props.MessageData}/>
    </section>
  );
};

export default Dialogs;
