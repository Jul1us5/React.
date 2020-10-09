import { dialogsReducer } from "./dialogs-reducer";
import { postsReducer } from "./posts-reducer";

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
      newMessageText: ":D",
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
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._state.posts = postsReducer(this._state.posts, action);

    this._callSubscriber(this._state);
  },
};

export default store;
