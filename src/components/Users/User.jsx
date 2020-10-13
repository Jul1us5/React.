import React from "react";
import style from "./User.module.scss";

let User = (props) => {
  let printUser = props.users.user.map((el, i) => (
    <OneMember
      key={i}
      title={el.title}
      firstname={el.firstname}
      lastname={el.lastname}
      img={el.img}
      preview={el.preview}
    />
  ));

  return <div className={style.userWrap}>{printUser}</div>;
};

const OneMember = (props) => {
  return (
    <div className={style.user}>
      <div className={style.head}>
        <img src={props.preview} alt="img" />
      </div>
      <div className={style.img}>
        <img src={props.img} alt="img" />
      </div>
      <div className={style.who}>
        {props.firstname} {props.lastname}
      </div>
      <div className={style.title}>{props.title}</div>
      <div className={style.follow}>
        <button>Follow</button>
      </div>
    </div>
  );
};

export default User;
