const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = { 
    users: [
//     {id: 1, photoUrl:'https://cdn1.mecum.com/auctions/pa0715/pa0715-216947/images/pa0715-216947_9@2x.jpg?1438443018000', 
//         followed:true, fullName: "Дмитрий", status: "Один из немногих", location: {city:"Saint-Petersburg", country: "Russia"} },
//     {id: 2, photoUrl:'https://catherineasquithgallery.com/uploads/posts/2021-02/1612265066_104-p-mashina-na-fioletovom-fone-149.jpg', 
//         followed:false, fullName: "Тусяныч", status: "Настроение Среднее", location: {city:"Magnitogorsk", country: "Russia"} },
//     {id: 3, photoUrl:'https://c.wallhere.com/photos/10/6e/car_Dodge_Challenger_red_cars_Dodge-248478.jpg!d', 
//         followed:true, fullName: "Филар", status: "Вечно веселый", location: {city:"Pushkin", country: "Russia"} },
//     {id: 4, photoUrl:'https://a.d-cd.net/e406914s-960.jpg', 
//         followed:false, fullName: "Абдул", status: "Хочу найти друзей", location: {city:"Kemer", country: "Turkey"} },
    ],
    pageSize: 4,
    totalUsersCount: 20,
    currentPage: 3
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
        case SET_USERS: {
            return {...state, users: [...state.users , ...action.users]}
         }

        default:
            return state;
}
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export default usersReducer;