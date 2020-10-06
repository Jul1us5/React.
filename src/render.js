import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createPost, updatePostTextArea } from "./redux/state";

export let rerender = (state) => {
  ReactDOM.render(
    <App state={state} createPost={createPost} updatePostTextArea={updatePostTextArea}/>,
    document.getElementById("root")
  );
};