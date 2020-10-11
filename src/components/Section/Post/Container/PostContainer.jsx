import React from "react";
import Post from "../Post";

import {
  createPostAction,
  updatePostAction,
} from "../../../../redux/posts-reducer";
import StoreContext from "../../../../StoreContext";

const PostContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(createPostAction());
        };

        let onPostChange = (text) => {
          store.dispatch(updatePostAction(text));
        };

        return (
          <Post
            newPostText={onPostChange}
            addPost={addPost}
            posts={state.posts}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostContainer;
