import React from "react";
import style from "./Post.module.scss";
// import { createPost } from "./redux/state";

const Post = (props) => {

  let newPost = React.createRef();

  let addPost = () => {
    
    let text = newPost.current.value;
    props.createPost(text);
    newPost.current.value = '';
  };

  let printPost = props.state.onePost.map((el, i) => (
    <Posted value={el.text} key={i} />
  ));

  return (
    <div className={style.body}>
      <textarea ref={newPost} className={style.comment}></textarea>
      <button onClick={addPost}>Click</button>
      <div className={style.postArea}>{printPost}</div>
    </div>
  );
};

const Posted = (props) => {
  return <div className={style.background}>{props.value}</div>;
};

export default Post;
