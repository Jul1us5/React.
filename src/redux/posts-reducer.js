const CREATE_POST = "CREATE-POST";
const UPDATE_POST_AREA = "UPDATE-POST-AREA";

export const postsReducer = (state, action) => {
  switch (action.type) {
    case CREATE_POST:
      let newPost = { id: 10, text: state.newPostText };
      state.newPostText = "";
      state.onePost.push(newPost);
      return state;
    case UPDATE_POST_AREA:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const createPostAction = () => {
  return {
    type: CREATE_POST,
  };
};
export const updatePostAction = (text) => {
  return {
    type: UPDATE_POST_AREA,
    newText: text,
  };
};
