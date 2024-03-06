import { combineReducers, createStore } from 'redux';
import { profileReducer, ProfileReducerActionTypes } from 'redux/profile-reducer';
import { dialogsReducer, DialogsReducerActionTypes } from 'redux/dialogs-reducer';

export type PostType = {
  id: string
  message: string
  likesCount: number
}

export type DialogType = {
  id: string
  name: string
}

export type MessageType = {
  id: string
  message: string
}

export type ProfilePageType = {
  posts: PostType[]
  newPostText: string
}

export type DialogsPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessageBody: string
}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export type ActionTypes = ProfileReducerActionTypes
  | DialogsReducerActionTypes

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

export const store = createStore(reducers);

// @ts-ignore
window.store = store;