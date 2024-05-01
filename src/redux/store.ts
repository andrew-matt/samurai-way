import { applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer, ProfileReducerActionsType } from 'redux/profile-reducer';
import { dialogsReducer, DialogsReducerActionsType } from 'redux/dialogs-reducer';
import { usersReducer, UsersReducerActionsType } from 'redux/users-reducer';
import { authReducer, AuthReducerActionsType } from 'redux/auth-reducer';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type AppActionsType =
  ProfileReducerActionsType
  | DialogsReducerActionsType
  | UsersReducerActionsType
  | AuthReducerActionsType

export type AppThunk = ThunkAction<void, AppStateType, unknown, AppActionsType>

// @ts-ignore
window.store = store;