import { createStore, combineReducers } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { postsReducer } from "./posts-reducer";
import { usersReducer } from "./users-reducer";

let reducers = combineReducers({
  dialogs: dialogsReducer,
  users: usersReducer,
  posts: postsReducer,
});

const store = createStore(reducers);

window.store = store;
export default store;
