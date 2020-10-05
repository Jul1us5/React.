import React from "react";
import style from "./Info.module.scss";


const Info = (props) => {
  return (
    <section>
        <div className={style.avatar}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoHYtXTchhspak0O8PNPKAPD9Cf08U6284ng&usqp=CAU" alt="Avatar"/>
            <span>Julius</span>
            <span>Message</span>
        </div>
    </section>
  );
};

export default Info;