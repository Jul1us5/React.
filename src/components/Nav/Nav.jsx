import React from 'react';
import { NavLink } from 'react-router-dom';
import style from'./Nav.module.scss';

const Nav = () => {
    return (
        <nav className={style.color}>
            <NavLink to="#link">HOME</NavLink>
            <NavLink to="#link">PROFILE</NavLink>
            <NavLink to="/profile">FEED</NavLink>
            <NavLink to="/dialogs">DIALOGS</NavLink>
            <NavLink to="#link">SETTINGS</NavLink>
        </nav>
    );
}

export default Nav;