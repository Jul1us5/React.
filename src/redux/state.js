import { rerender } from "../render";

let state = {
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
};

// window.state = state;

export let createPost = () => {
  let newPost = {
    id: 5,
    text: state.posts.newPostText
  };
  state.posts.onePost.push(newPost);
  state.posts.newPostText = '';
  rerender(state);
}

export let updatePostTextArea = (newText) => {
  let newPost = {
    id: 5,
    text: postMessage
  };
  state.posts.newPostText = newText;
  rerender(state);
}

export default state;
