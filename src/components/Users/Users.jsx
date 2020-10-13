import React from 'react';
import User from './User/User';
import style from './Users.module.scss'

const Users = (props) => {
  return <section className={style.users}>
    <User />
    <User />
    <User />
    <User />
  </section>;
};

export default Users;
