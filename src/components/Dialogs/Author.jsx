import React from "react";
import style from "./Dialogs.module.scss";
import { NavLink } from 'react-router-dom';

const Author = (props) => {
  return (
    <div>
      <span>
        <NavLink to="/dialogs/1" activeClassName={style.active}>Julius</NavLink>
      </span>
      <span>
        <NavLink to="/dialogs/2" activeClassName={style.active}>Evelina</NavLink>
      </span>
      <span>
        <NavLink to="/dialogs/3" activeClassName={style.active}>Paulius</NavLink>
      </span>
      <span>
        <NavLink to="/dialogs/4" activeClassName={style.active}>Andrius</NavLink>
      </span>
    </div>
  );
};

export default Author;
