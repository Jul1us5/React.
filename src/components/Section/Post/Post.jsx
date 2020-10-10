import React from "react";
import style from "./Post.module.scss";
// import {
//   createPostAction,
//   updatePostAction,
// } from "../../../redux/posts-reducer";

const Post = (props) => {

  // console.log(props.posts);
  let printPost = props.posts.onePost.map((el, i) => (
    <Posted value={el.text} key={i} />
  ));

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(createPostAction());
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.newPostText(text);
    // props.dispatch(updatePostAction(text));
  };

  return (
    <div className={style.body}>
      <textarea
        onChange={onPostChange}
        className={style.comment}
        value={props.posts.newPostText}
      />
      <button onClick={onAddPost}>Click</button>
      <div className={style.postArea}>{printPost}</div>
    </div>
  );
};

const Posted = (props) => {
  return <div className={style.background}>{props.value}</div>;
};

export default Post;
