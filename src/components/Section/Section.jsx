import React from "react";
import style from "./Section.module.scss";
import Post from "./Post/Post"

const Section = (props) => {
  return (
    <section>
      <div className={style.header}>Header</div>
      <div className={style.body}>Body</div>
      <div className={style.post}>
          <Post value='Hi! Its my first props!'/>
          <Post value='Im on my way!'/>
      </div>
    </section>
  );
};

export default Section;
