import React from "react";
import Info from "./Info/Info";
import style from "./Profile.module.scss";


const Profile = (props) => {
  return (
    <section className={style.profile}>
      <Info />
    </section>
  );
};

export default Profile;