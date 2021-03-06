const CREATE_POST = "CREATE-POST";
const UPDATE_POST_AREA = "UPDATE-POST-AREA";

let initialState = {
  onePost: [
    { id: 1, text: "Hi! Its my first props!" },
    { id: 2, text: "Im on my way!" },
  ],
  newPostText: "new Post",
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      let newPost = { id: 10, text: state.newPostText };

      return {
        ...state,
        onePost: [...state.onePost, newPost],
        newPostText: "",
      };
    case UPDATE_POST_AREA:
      return {
        ...state,
        newPostText: action.newText,
      };
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
