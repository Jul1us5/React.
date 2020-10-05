import React from "react";
import style from "./Section.module.scss";
import Post from "./Post/Post"

let newPost = React.createRef();

let addPost = () => {
  let text = newPost.current.value;
  return alert(text);
}

const Section = (props) => {
  return (
    <section>
      <div className={style.header}>Header</div>
      <div className={style.body}>
        <textarea ref={newPost} className={style.comment}></textarea>
        <button onClick={ addPost }>Click</button>
      </div>
      <div className={style.post}>
          <Post value='Hi! Its my first props!'/>
          <Post value='Im on my way!'/>
      </div>
    </section>
  );
};

export default Section;
