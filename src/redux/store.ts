import { profileReducer, ProfileReducerActionTypes } from 'redux/profile-reducer';
import { dialogsReducer, DialogsReducerActionTypes } from 'redux/dialogs-reducer';

type PostType = {
  id: string
  message: string
  likesCount: number
}

type DialogType = {
  id: string
  name: string
}

type MessageType = {
  id: string
  message: string
}

type ProfilePageType = {
  posts: PostType[]
  newPostText: string
}

type DialogsPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessageBody: string
}

type RootStateType = {
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

type ActionTypes = ProfileReducerActionTypes
  | DialogsReducerActionTypes

const store: StoreType = {
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
    // @ts-ignore
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber();
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },
};

