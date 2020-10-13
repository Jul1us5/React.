import { connect } from "react-redux";
import User from "../User";

let mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const UserContainer = connect(mapStateToProps)(User);

export default UserContainer;
