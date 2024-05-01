import { Dispatch } from 'redux';
import { usersAPI } from 'api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

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
  isFetching: false,
  followingInProgress: [] as number[],
};

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionsType): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return {
              ...user,
              followed: true,
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
              followed: false,
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
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching};
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter(id => id !== action.userID),
      };
    }
    default:
      return state;
  }
};

export type UsersReducerActionsType = ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>


// actions
const followSuccess = (userID: number) => {
  return {
    type: FOLLOW,
    userID,
  } as const;
};

const unfollowSuccess = (userID: number) => {
  return {
    type: UNFOLLOW,
    userID,
  } as const;
};

export const setUsers = (users: UserType[]) => {
  return {
    type: SET_USERS,
    users,
  } as const;
};

export const setCurrentPage = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  } as const;
};

export const setTotalUsersCount = (totalUsersCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  } as const;
};

export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  } as const;
};

export const toggleFollowingProgress = (isFetching: boolean, userID: number) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID,
  } as const;
};


// thunks
export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      });
  };
};

export const followUser = (userID: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));
    usersAPI.followUser(userID)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(userID));
        }
        dispatch(toggleFollowingProgress(false, userID));
      });
  };
};

export const unfollowUser = (userID: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));
    usersAPI.unfollowUser(userID)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unfollowSuccess(userID));
        }
        dispatch(toggleFollowingProgress(false, userID));
      });
  };
};