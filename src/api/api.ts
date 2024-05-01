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
    console.warn('Obsolete method. Please use profileAPI object.');
    return profileAPI.getProfile(userID);
  },
};

export const profileAPI = {
  getProfile(userID: string) {
    return instance.get(`profile/${userID}`)
      .then(response => response.data);
  },
  getStatus(userID: string) {
    return instance.get(`profile/status/${userID}`)
      .then(response => response.data);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, {status: status})
      .then(response => response.data);
  },
};

export const authAPI = {
  authMe() {
    return instance.get('auth/me')
      .then(response => response.data);
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance.post('auth/login', {email, password, rememberMe})
      .then(response => response.data);
  },
  logout() {
    return instance.delete('auth/login')
      .then(response => response.data);
  },
};