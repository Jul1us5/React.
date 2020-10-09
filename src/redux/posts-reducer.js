

const CREATE_POST = 'CREATE-POST';
const UPDATE_POST_AREA = 'UPDATE-POST-AREA';

const postsReducer = (state, action) => {
  if (action.type === CREATE_POST) {
    let newPost = {
      id: 10,
      text: state.newPostText,
    };
    state.newPostText = '';
    state.onePost.push(newPost);
    return state;
  } else if (action.type === UPDATE_POST_AREA) {
    state.newPostText = action.newText;
  }

  return state;
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

export default postsReducer;
