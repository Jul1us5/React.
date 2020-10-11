import Post from "../Post";
import {
  createPostAction,
  updatePostAction,
} from "../../../../redux/posts-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newPostText: (text) => {
      dispatch(updatePostAction(text));
    },
    addPost: () => {
      dispatch(createPostAction());
    },
  };
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;
