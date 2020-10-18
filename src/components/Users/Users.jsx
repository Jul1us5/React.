import React from "react";
import UserContainer from "./Container/UserContainer";
import style from "./Users.module.scss";

class Users extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <section className={style.users}>
        <UserContainer />
      </section>
    );
  }
}

export default Users;
