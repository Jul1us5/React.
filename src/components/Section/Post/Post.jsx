import React from "react";
import style from "./Post.module.scss";

const Post = (props) => {

  let printPost = props.state.onePost.map((el, i) => (
    <Posted value={el.text} key={i} />
  ));

  let newPost = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'CREATE-POST' });
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    props.dispatch({ type: 'UPDATE-POST-AREA', newText: text});
  }

  return (
    <div className={style.body}>
      <textarea onChange={onPostChange} ref={newPost} className={style.comment} value={props.newPostText}/>
      <button onClick={addPost}>Click</button>
      <div className={style.postArea}>{printPost}</div>
    </div>
  );
};

const Posted = (props) => {
  return <div className={style.background}>{props.value}</div>;
};

export default Post;
