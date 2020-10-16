import { connect } from "react-redux";
import { followAC, unfollowAC } from "../../../redux/users-reducer";
import User from "../User";

let mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userid) => {
      dispatch(followAC(userid));
    },
    unfollow: (userid) => {
      dispatch(unfollowAC(userid));
    },
  };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
