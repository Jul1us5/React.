import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/state";

let rerender = (state) => {
  ReactDOM.render(
    <App state={state} createPost={store.createPost.bind(store)} updatePostTextArea={store.updatePostTextArea.bind(store)}/>,
    document.getElementById("root")
  );
};

rerender(store.getState());

store.subscribe(rerender);

serviceWorker.unregister();
