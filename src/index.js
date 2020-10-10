import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import store from './redux/redux-store';
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store';
// import { Provider } from 'react-router-dom';


let rerender = (store) => {

  
  // console.log(store);
  ReactDOM.render(
    
    <BrowserRouter>
    
      {/* <App store={store} dispatch={store.dispatch.bind(store)} /> */}
      <App store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};



rerender(store);

store.subscribe( () => {
  rerender(store);
});

serviceWorker.unregister();
