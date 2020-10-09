const CREATE_POST = "CREATE-POST";
const UPDATE_POST_AREA = "UPDATE-POST-AREA";
const CREATE_MESSAGE = "CREATE-MESSAGE";
const UPDATE_MESSAGE_AREA = "UPDATE-MESSAGE-AREA";

let store = {
  _state: {
    dialogs: {
      authors: [
        { name: "Julius", id: 1, message: "Hi! How are you?" },
        { name: "Evelina", id: 2, message: "I love you!" },
        { name: "Natalija", id: 3, message: "How about new opportunities?" },
        { name: "Paulius", id: 4, message: "I have idea for your project :)" },
        { name: "Arturas", id: 5, message: "Im fine.." },
      ],
      messages: [
        { id: 1, text: "Hi" },
        { id: 2, text: "My name is Julius" },
        { id: 3, text: "I creating Single page application" },
        { id: 4, text: "React!" },
      ],
      newMessageText: '....',
    },
    posts: {
      onePost: [
        { id: 1, text: "Hi! Its my first props!" },
        { id: 2, text: "Im on my way!" },
      ],
      newPostText: "new Post",
    },
  },
  _callSubscriber() {
    console.log("Render");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === CREATE_POST) {
      let newPost = {
        id: 5,
        text: this._state.posts.newPostText,
      };
      this._state.posts.onePost.push(newPost);
      this._state.posts.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_POST_AREA) {
      this._state.posts.newPostText = action.newText;
      this._callSubscriber(this._state);
    } 
    
    
    else if (action.type === CREATE_MESSAGE) {
      let newPosts = {
        id: 6,
        text: this._state.dialogs.newMessageText,
      };
      this._state.dialogs.messages.push(newPosts);
      this._state.dialogs.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_MESSAGE_AREA) {
      this._state.dialogs.newMessageText = action.newTexts;
      this._callSubscriber(this._state);
    }
  },
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

export const createMessageAction = () => {
  return {
    type: CREATE_MESSAGE,
  };
};
export const updateMessageAction = (text) => {
  return {
    type: UPDATE_MESSAGE_AREA,
    newTexts: text,
  };
};

window.store = store;
export default store;
