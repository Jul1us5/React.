import React from "react";
import style from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const AuthorItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <span>
      <NavLink to={path} activeClassName={style.active}>
        {props.name}
      </NavLink>
    </span>
  );
};

const Author = (props) => {
  let AuthorDataElement = props.authors.map((el, i) => (
    <AuthorItem key={i} name={el.name} id={el.id} />
  ));

  return <div>{AuthorDataElement}</div>;
};

export default Author;
