import React from 'react';
import { NavLink } from 'react-router-dom';
import style from'./Nav.module.scss';

const Nav = () => {
    return (
        <nav className={style.color}>
            <NavLink exact to="/home" activeClassName={style.active}>HOME</NavLink>
            <NavLink exact to="/profile" activeClassName={style.active}>PROFILE</NavLink>
            <NavLink exact to="/section" activeClassName={style.active}>FEED</NavLink>
            <NavLink exact to="/dialogs" activeClassName={style.active}>DIALOGS</NavLink>
            <NavLink exact to="/settings" activeClassName={style.active}>SETTINGS</NavLink>
        </nav>
    );
}

export default Nav;