import React from "react";
import Author from "../Author";

const AuthorContainer = (props) => {
  let state = props.store.getState();

  return <Author dialogs={state.dialogs} />;
};

export default AuthorContainer;
