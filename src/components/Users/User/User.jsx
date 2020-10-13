import React from "react";
import style from "./User.module.scss";

let User = (props) => {

    return (
    <div className={style.user}>
        <div className={style.head}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReonVTypPx7s2lrv6JS7wTEHB2KLngozG55g&usqp=CAU" alt="img" srcset=""/>
        </div>
        <div className={style.img}>
            <img src="https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1-400x400_x_acf_cropped.png" alt="img"/>
        </div>
        <div className={style.who}>Julius Vlasovas</div>
        <div className={style.title}>Hi. Im developer</div>
        <div className={style.follow}>
            <button>Follow</button>
        </div>
    </div>
    );
}

export default User;