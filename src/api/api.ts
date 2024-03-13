import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(userID: number) {
    return instance.post(`follow/${userID}`)
      .then(response => response.data);
  },
  unfollow(userID: number) {
    return instance.delete(`follow/${userID}`)
      .then(response => response.data);
  },
};

export const authAPI = {
  authMe() {
    return instance.get('auth/me')
      .then(response => response.data);
  },
};