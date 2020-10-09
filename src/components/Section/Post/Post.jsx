import React from "react";
import style from "./Post.module.scss";
import {
  createPostAction,
  updatePostAction,
} from "../../../redux/posts-reducer";

const Post = (props) => {
  let printPost = props.state.onePost.map((el, i) => (
    <Posted value={el.text} key={i} />
  ));

  let addPost = () => {
    props.dispatch(createPostAction());
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(updatePostAction(text));
  };

  return (
    <div className={style.body}>
      <textarea
        onChange={onPostChange}
        className={style.comment}
        value={props.state.newPostText}
      />
      <button onClick={addPost}>Click</button>
      <div className={style.postArea}>{printPost}</div>
    </div>
  );
};

const Posted = (props) => {
  return <div className={style.background}>{props.value}</div>;
};

export default Post;
