import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";

let rerender = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerender(store);

store.subscribe(() => {
  rerender(store);
});

serviceWorker.unregister();
