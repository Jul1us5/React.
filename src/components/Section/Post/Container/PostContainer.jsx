import React from "react";
import Post from "../Post";

import {
  createPostAction,
  updatePostAction,
} from "../../../../redux/posts-reducer";

const PostContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(createPostAction());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updatePostAction(text));
  };

  return (
    <Post newPostText={onPostChange} addPost={addPost} posts={state.posts} />
  );
};

export default PostContainer;
