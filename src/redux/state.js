let store = {
  _state: {
    dialogs: {
      authors: [
        {
          name: "Julius",
          id: 1,
        },
        {
          name: "Evelina",
          id: 2,
        },
        {
          name: "Natalija",
          id: 3,
        },
        {
          name: "Paulius",
          id: 4,
        },
        {
          name: "Arturas",
          id: 5,
        },
      ],
      messages: [
        {
          id: 1,
          text: "Hi",
        },
        {
          id: 2,
          text: "My name is Julius",
        },
        {
          id: 3,
          text: "I creating Single page application",
        },
        {
          id: 4,
          text: "React!",
        },
      ],
    },
    posts: {
      onePost: [
        {
          id: 1,
          text: "Hi! Its my first props!",
        },
        {
          id: 2,
          text: "Im on my way!",
        },
      ],
      newPostText: 'new Post'
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('Render')
  },
  createPost() {
    let newPost = {
      id: 5,
      text: this._state.posts.newPostText
    };
    this._state.posts.onePost.push(newPost);
    this._state.posts.newPostText = '';
    this._callSubscriber(this._state)
  },
  updatePostTextArea(newText) {
    // eslint-disable-next-line no-unused-vars
    let newPost = {
      id: 5,
      text: postMessage
    };
    this._state.posts.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}
window.store = store;
export default store;
