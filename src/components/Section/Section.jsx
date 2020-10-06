import React from "react";
import Post from "./Post/Post";
import style from "./Section.module.scss";

const Section = (props) => {
  
  return (
    <section>
      <div className={style.header}>Header</div>
      <div className={style.body}>Body</div>
      <Post state={props.state.posts} createPost={props.createPost}/>
    </section>
  );

};

export default Section;

