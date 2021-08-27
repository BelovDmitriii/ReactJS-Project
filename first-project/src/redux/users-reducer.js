const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    users: [
        {id: 1, followed:true, name: "Дмитрий", status: "Один из немногих", location: {city:"Saint-Petersburg", country: "Russia"} },
        {id: 2, followed:false, name: "Тусяныч", status: "Настроение Среднее", location: {city:"Magnitogorsk", country: "Russia"} },
        {id: 3, followed:true, name: "Филар", status: "Вечно веселый", location: {city:"Pushkin", country: "Russia"} },
        {id: 4, followed:false, name: "Абдул", status: "Хочу найти друзей", location: {city:"Kemer", country: "Turkey"} },
      ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
}
}
export default usersReducer;