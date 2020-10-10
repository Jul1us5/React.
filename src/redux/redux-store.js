import { createStore, combineReducers } from 'redux'
import { dialogsReducer } from "./dialogs-reducer";
import { postsReducer } from "./posts-reducer";


let reducers = combineReducers({
    dialogs: dialogsReducer,
    posts: postsReducer,
});

let store = createStore(reducers);


export default store;