const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

export type UserType = {
  name: string
  id: number
  photos: {
    small: string
    large: string
  }
  status: string
  followed: boolean
}

const initialState = {
  users: [] as UserType[],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
};

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return {
              ...user,
              followed: !user.followed,
            };
          }
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return {
              ...user,
              followed: !user.followed,
            };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return {...state, users: action.users};
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage};
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.totalUsersCount};
    }
    default:
      return state;
  }
};

export type UsersReducerActionTypes = ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userID: number) => {
  return {
    type: FOLLOW,
    userID,
  } as const;
};

export const unfollowAC = (userID: number) => {
  return {
    type: UNFOLLOW,
    userID,
  } as const;
};

export const setUsersAC = (users: UserType[]) => {
  return {
    type: SET_USERS,
    users,
  } as const;
};

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  } as const;
};

export const setTotalUsersCountAC = (totalUsersCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  } as const;
};
