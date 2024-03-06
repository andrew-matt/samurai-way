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

type StoreType = {
  _state: RootStateType
  getState: () => RootStateType
  dispatch: (action: ActionTypes) => void
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
}

export type ActionTypes = ProfileReducerActionTypes
  | DialogsReducerActionTypes

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: '1', message: 'May the force be with you', likesCount: 15},
        {
          id: '2',
          message: 'These aren\'t the droids you\'re looking for',
          likesCount: 20,
        },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        {id: '1', name: 'John'},
        {id: '2', name: 'Bob'},
        {id: '3', name: 'Ann'},
        {id: '4', name: 'Helen'},
        {id: '5', name: 'Noah'},
      ],
      messages: [
        {id: '1', message: 'Hello there'},
        {id: '2', message: 'Nice to meet you'},
        {id: '3', message: 'Hell yeah!'},
      ],
      newMessageBody: '',
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber();
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },
};

// @ts-ignore
window.store = store;
