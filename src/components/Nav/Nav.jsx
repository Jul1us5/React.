import React from 'react';
import { NavLink } from 'react-router-dom';
import style from'./Nav.module.scss';

const Nav = () => {
    return (
        <nav className={style.color}>
            <NavLink to="/home" activeClassName={style.active}>HOME</NavLink>
            <NavLink to="/profile" activeClassName={style.active}>PROFILE</NavLink>
            <NavLink to="/section" activeClassName={style.active}>FEED</NavLink>
            <NavLink to="/dialogs" activeClassName={style.active}>DIALOGS</NavLink>
            <NavLink to="/settings" activeClassName={style.active}>SETTINGS</NavLink>
        </nav>
    );
}

export default Nav;