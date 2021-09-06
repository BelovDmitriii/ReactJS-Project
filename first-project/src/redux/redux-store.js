import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers ({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidibar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;