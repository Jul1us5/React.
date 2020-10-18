import React from "react";
import style from "./User.module.scss";

class User extends React.Component {
  constructor(props) {
    super();
  }
  
  render() {
    return this.props.users.user.map((u) => {
      return (
        <div key={u.id} className={style.user}>
          <div className={style.head}>
            <img src={u.preview} alt="img" />
          </div>
          <div className={style.img}>
            <img src={u.img} alt="img" />
          </div>
          <div className={style.who}>
            {u.firstname} {u.lastname}
          </div>
          <div className={style.title}>{u.title}</div>
          <div className={style.follow}>
            {u.follow ? (
              <button
                onClick={() => {
                  this.props.follow(u.id);
                }}
              >
                FOLLOW
              </button>
            ) : (
              <button
                onClick={() => {
                  this.props.unfollow(u.id);
                }}
              >
                UNFOLLOW
              </button>
            )}
          </div>
        </div>
      );
    });
  }
}

export default User;

// let User = (props) => {
// return props.users.user.map((u) => {
//   return (
//     <div key={u.id} className={style.user}>
//       <div className={style.head}>
//         <img src={u.preview} alt="img" />
//       </div>
//       <div className={style.img}>
//         <img src={u.img} alt="img" />
//       </div>
//       <div className={style.who}>
//         {u.firstname} {u.lastname}
//       </div>
//       <div className={style.title}>{u.title}</div>
//       <div className={style.follow}>
//         {u.follow ? (
//           <button
//             onClick={() => {
//               props.follow(u.id);
//             }}
//           >
//             FOLLOW
//           </button>
//         ) : (
//           <button
//             onClick={() => {
//               props.unfollow(u.id);
//             }}
//           >
//             UNFOLLOW
//           </button>
//         )}
//       </div>
//     </div>
//   );
// });
// };
