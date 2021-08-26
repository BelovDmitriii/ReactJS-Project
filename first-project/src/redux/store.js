import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Привет! Как дела?", likeCounts: "25"},
                {id: 2, message: "Да я нормально! Это мой первый пост", likeCounts: "1"},
                {id: 3, message: "Похоже здесь никого нет(", likeCounts: "0"},
                {id: 4, message: "Оу-е! Я первый!!!", likeCounts: "37"}
              ],
            newPostText: "New Post"
        },
        messagePage: {
            dialogs: [
                {id: 1, name: "Димон"},
                {id: 2, name: "Минин"},
                {id: 3, name: "Тусяныч"},
                {id: 4, name: "Филар"},
                {id: 5, name: "Йосик"},
                {id: 6, name: "Алексей"}
            ],
            messages: [
                {id:1, message: "Привет парни! Как ваши дела?"},
                {id:2, message: "Привет! Тут не только парни так-то!"},
                {id:3, message: "Всем привет! Какие планы на выходные"},
                {id:4, message: "Скоро встретимся на даче! Yo!!!"},
                {id:5, message: "Как я вижу, сегодня похоже все заняты ( . )( . )"}
            ],
            newMessageText: ""
        },
        sidebar: {}
    },
    _callSubscriber () {
        console.log("file was changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}
 
export default store;
window.store = store;