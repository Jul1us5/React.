import React from 'react';
import { NavLink } from 'react-router-dom';
import style from'./Nav.module.scss';

const Nav = () => {
    return (
        <nav className={style.color}>
            <NavLink to="/home">HOME</NavLink>
            <NavLink to="/profile">PROFILE</NavLink>
            <NavLink to="/section">FEED</NavLink>
            <NavLink to="/dialogs">DIALOGS</NavLink>
            <NavLink to="/settings">SETTINGS</NavLink>
        </nav>
    );
}

export default Nav;