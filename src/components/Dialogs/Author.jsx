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
  return (
    <div>
      <AuthorItem name="Julius" id="1" />
      <AuthorItem name="Evelina" id="2" />
      <AuthorItem name="Natalija" id="3" />
      <AuthorItem name="Paulius" id="4" />
      <AuthorItem name="Arturas" id="5" />
    </div>
  );
};

export default Author;
