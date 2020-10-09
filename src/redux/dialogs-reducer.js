const CREATE_MESSAGE = "CREATE-MESSAGE";
const UPDATE_MESSAGE_AREA = "UPDATE-MESSAGE-AREA";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      let newPosts = { id: 6, text: state.newMessageText };
      state.newMessageText = "";
      state.messages.push(newPosts);
      return state;
    case UPDATE_MESSAGE_AREA:
      state.newMessageText = action.newTexts;
      return state;
    default:
      return state;
  }
};

export const createMessageAction = () => {
  return {
    type: CREATE_MESSAGE,
  };
};
export const updateMessageAction = (text) => {
  return {
    type: UPDATE_MESSAGE_AREA,
    newTexts: text,
  };
};

export default dialogsReducer;
