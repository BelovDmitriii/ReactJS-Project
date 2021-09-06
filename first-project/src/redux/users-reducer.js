const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {id: 1, followed:true, fullName: "Дмитрий", status: "Один из немногих", location: {city:"Saint-Petersburg", country: "Russia"} },
        {id: 2, followed:false, fullName: "Тусяныч", status: "Настроение Среднее", location: {city:"Magnitogorsk", country: "Russia"} },
        {id: 3, followed:true, fullName: "Филар", status: "Вечно веселый", location: {city:"Pushkin", country: "Russia"} },
        {id: 4, followed:false, fullName: "Абдул", status: "Хочу найти друзей", location: {city:"Kemer", country: "Turkey"} },
      ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW: 
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS: 
            return {
                ...state, 
                users: [...state.users, ...action.users]
            }

        default:
            return state;
}
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export default usersReducer;