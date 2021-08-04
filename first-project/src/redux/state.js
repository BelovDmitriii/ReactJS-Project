const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

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
                {id: 1, name: "Dimon"},
                {id: 2, name: "Minin"},
                {id: 3, name: "Tusanich"},
                {id: 4, name: "Filar"},
                {id: 5, name: "Iosik"},
                {id: 6, name: "Aleksey"}
            ],
            messages: [
                {id:1, message: "Привет парни! Как ваши дела?"},
                {id:2, message: "Привет! Тут не только парни так-то!"},
                {id:3, message: "Всем привет! Какие планы на выходные"},
                {id:4, message: "Скоро встретимся на даче! Yo!!!"},
                {id:5, message: "Как я вижу, сегодня похоже все заняты ( . )( . )"}
            ],
            newMessageText: ""
        }
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
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounts: 0
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.messagePage.newMessageText = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagePage.newMessageText;
            this._state.messagePage.newMessageText = "";
            this._state.messagePage.messages.push ({ id: 6, message: body });
            this._callSubscriber(this._state);
        }
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body})
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
}
 
export default store;
window.store = store;