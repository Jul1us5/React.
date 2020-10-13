import { createStore, combineReducers } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { postsReducer } from "./posts-reducer";
import { usersReducer } from "./users-reducer";

let reducers = combineReducers({
  dialogs: dialogsReducer,
  posts: postsReducer,
  users: usersReducer,
});

const store = createStore(reducers);

window.store = store;
export default store;
