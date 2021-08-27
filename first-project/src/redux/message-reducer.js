const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageText;
            return {
                ...state,    
                newMessageText:"",
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default messageReducer;