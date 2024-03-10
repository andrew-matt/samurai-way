import { combineReducers, createStore } from 'redux';
import { profileReducer } from 'redux/profile-reducer';
import { dialogsReducer } from 'redux/dialogs-reducer';
import { usersReducer } from 'redux/users-reducer';
import { authReducer } from 'redux/auth-reducer';

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;