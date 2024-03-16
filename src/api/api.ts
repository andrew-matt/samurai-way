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
  followUser(userID: number) {
    return instance.post(`follow/${userID}`)
      .then(response => response.data);
  },
  unfollowUser(userID: number) {
    return instance.delete(`follow/${userID}`)
      .then(response => response.data);
  },
  getProfile(userID: string) {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then(response => response.data);
  },
};

export const authAPI = {
  authMe() {
    return instance.get('auth/me')
      .then(response => response.data);
  },
};