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
      or={el.follow}
      x={el.id}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  ));

  return <div className={style.userWrap}>{printUser}</div>;
};

const OneMember = (props) => {
  console.log(props.or);
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
        {props.or 
        ? <button onClick={ () => {props.follow(props.x) } }>FOLLOW</button> 
        : <button onClick={ () => {props.unfollow(props.x) } }>UNFOLLOW</button>}
        
      </div>
    </div>
  );
};
debugger

export default User;
