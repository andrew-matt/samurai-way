import { combineReducers, createStore } from 'redux';
import { profileReducer, ProfileReducerActionTypes } from 'redux/profile-reducer';
import { dialogsReducer, DialogsReducerActionTypes } from 'redux/dialogs-reducer';

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;

export type ActionTypes = ProfileReducerActionTypes
  | DialogsReducerActionTypes
