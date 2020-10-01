import React from 'react';
import style from'./Nav.module.scss';

const Nav = () => {
    return (
        <nav className={style.color}>
            <a href="#link">HOME</a>
            <a href="#link">PROFILE</a>
            <a href="#link">FEED</a>
            <a href="#link">DIALOGS</a>
            <a href="#link">NEWS</a>
        </nav>
    );
}

export default Nav;