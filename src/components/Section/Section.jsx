import React from "react";
import PostContainer from "./Post/Container/PostContainer";
import style from "./Section.module.scss";

const Section = (props) => {
  return (
    <section>
      <div className={style.header}>Header</div>
      <PostContainer store={props.store} />
    </section>
  );
};

export default Section;
