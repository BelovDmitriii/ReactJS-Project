import * as axios from 'axios';

const instance = axios.create ({
    withCredentials: true,
    headers: {
        'API-KEY': '415510cc-fbfa-4dcf-b76e-6c4db7f8f5dc'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then (response => {
            return response.data;
        });
    }
}