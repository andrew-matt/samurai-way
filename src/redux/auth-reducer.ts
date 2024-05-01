import { authAPI } from 'api/api';
import { AppThunk } from 'redux/store';

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  userID: null as null | number,
  email: null as null | string,
  login: null as null | string,
  isAuth: false,
};

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionsType): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export type AuthReducerActionsType = ReturnType<typeof setAuthUserData>

// actions
const setAuthUserData = (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => {
  return {
    type: SET_USER_DATA,
    payload: {userID, email, login, isAuth},
  } as const;
};

// thunks
export const getAuthUserData = (): AppThunk => (dispatch) => {
  authAPI.authMe().then(data => {
    if (data.resultCode === 0) {
      const {id, email, login} = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};

export const logout = (): AppThunk => (dispatch) => {
  authAPI.logout().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

