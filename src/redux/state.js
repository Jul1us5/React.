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
  _callSubscriber() {
    console.log('Render')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if(action.type === 'CREATE-POST') {
      let newPost = {
        id: 5,
        text: this._state.posts.newPostText
      };
      this._state.posts.onePost.push(newPost);
      this._state.posts.newPostText = '';
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-POST-AREA') {
      this._state.posts.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}
window.store = store;
export default store;
