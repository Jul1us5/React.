import React from 'react';
import UserContainer from './Container/UserContainer';
import style from './Users.module.scss'

const Users = (props) => {
  return <section className={style.users}>
    <UserContainer />
  </section>;
};

export default Users;
