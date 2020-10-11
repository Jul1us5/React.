import React from "react";
import StoreContext from "../../../StoreContext";
import Author from "../Author";

const AuthorContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        return <Author dialogs={state.dialogs} />;
      }}
    </StoreContext.Consumer>
  );
};

export default AuthorContainer;
