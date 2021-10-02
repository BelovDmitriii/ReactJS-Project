const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {id: 1, message: "Привет! Как дела?", likeCounts: "25"},
        {id: 2, message: "Да я нормально! Это мой первый пост", likeCounts: "1"},
        {id: 3, message: "Похоже здесь никого нет(", likeCounts: "0"},
        {id: 4, message: "Оу-е! Я первый!!!", likeCounts: "37"}
      ],
    newPostText: "New Post",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;