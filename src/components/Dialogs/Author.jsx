import React from "react";
import style from "./Author.module.scss";
import { NavLink } from "react-router-dom";

const AuthorItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <NavLink to={path} className={style.link} activeClassName={style.active}>
      <div className={style.conversation}>
        <div className={style.img}></div>
        <div className={style.title}>{props.name}</div>
        <div className={style.message}>{props.message}</div>
      </div>
    </NavLink>
  );
};

const Author = (props) => {
  let x = props.dialogs.authors;
  console.log(x);

  let AuthorDataElement = props.dialogs.authors.map((el, i) => (
    <AuthorItem key={i} name={el.name} message={el.message} id={el.id} />
  ));

  return <div>{AuthorDataElement}</div>;
};

export default Author;
