const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

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
      return {...state, users: [...state.users, ...action.users]};
    }
    default:
      return state;
  }
};

export type UsersReducerActionTypes = ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => {
  return {
    type: FOLLOW,
    userID: userID,
  } as const;
};

export const unfollowAC = (userID: number) => {
  return {
    type: UNFOLLOW,
    userID: userID,
  } as const;
};

export const setUsersAC = (users: UserType[]) => {
  return {
    type: SET_USERS,
    users: users,
  } as const;
};