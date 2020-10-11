import { connect } from "react-redux";
import Author from "../Author";

const manStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};

const AuthorContainer = connect(manStateToProps)(Author);

export default AuthorContainer;
