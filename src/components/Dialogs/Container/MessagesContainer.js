import Messages from "../Messages";
import {
  createMessageAction,
  updateMessageAction,
} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    newMessageText: (text) => {
      dispatch(updateMessageAction(text));
    },
    addMessage: () => {
      dispatch(createMessageAction());
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
