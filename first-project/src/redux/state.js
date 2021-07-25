import {rerenderEntireTree} from "../render";

let state = {
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
        ]
    }
}

 export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounts: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
 }

 export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
 
export default state;