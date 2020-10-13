// import Messages from "../Messages";
// import {
//   createMessageAction,
//   updateMessageAction,
// } from "../../../../redux/users-reducer";
import { connect } from "react-redux";
import Users from "../../Users";

let mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     newMessageText: (text) => {
//       dispatch(updateMessageAction(text));
//     },
//     addMessage: () => {
//       dispatch(createMessageAction());
//     },
//   };
// };

const UserContainer = connect(
  mapStateToProps
)(Users);

export default UserContainer;