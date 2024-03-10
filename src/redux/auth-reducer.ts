const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  userID: null as null | number,
  email: null as null | string,
  login: null as null | string,
  isAuth: false,
};

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionTypes): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

type AuthReducerActionTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userID: number, email: string, login: string) => {
  return {
    type: SET_USER_DATA,
    data: {userID, email, login},
  } as const;
};