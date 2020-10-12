const CREATE_MESSAGE = "CREATE-MESSAGE";
const UPDATE_MESSAGE_AREA = "UPDATE-MESSAGE-AREA";

let initialState = {
  authors: [
    { name: "Julius", id: 1, message: "Hi! How are you?" },
    { name: "Evelina", id: 2, message: "I love you!" },
    { name: "Natalija", id: 3, message: "How about new opportunities?" },
    { name: "Paulius", id: 4, message: "I have idea for your project :)" },
    { name: "Arturas", id: 5, message: "Im fine.." },
  ],
  messages: [
    { id: 1, text: "Hi" },
    { id: 2, text: "My name is Julius" },
    { id: 3, text: "I creating Single page application" },
    { id: 4, text: "React!" },
  ],
  newMessageText: "",
};

export const dialogsReducer = (state = initialState, action) => {
  let stateCopy = { ...state },
    messages = [...state.messages];
  switch (action.type) {
    case CREATE_MESSAGE:
      let newPosts = { id: 6, text: state.newMessageText };

      stateCopy.messages.push(newPosts);
      stateCopy.newMessageText = "";
      return stateCopy;

    case UPDATE_MESSAGE_AREA:
      stateCopy.newMessageText = action.newTexts;
      return stateCopy;

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
