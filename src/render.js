import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createPost } from "./redux/state";

export let rerender = (state) => {
  ReactDOM.render(
    <App state={state} createPost={createPost} />,
    document.getElementById("root")
  );
};