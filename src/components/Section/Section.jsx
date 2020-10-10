import React from "react";
// import Post from "./Post/Post";
import PostContainer from "./Post/PostContainer";
import style from "./Section.module.scss";

const Section = (props) => {
  return (
    <section>
      <div className={style.header}>Header</div>
      <PostContainer store={props.store}/>
      {/* <Post state={props.state.posts} dispatch={props.dispatch} /> */}
    </section>
  );
};

export default Section;
