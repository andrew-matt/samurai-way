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

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
    if (action.type === ADD_POST) {
      const newPost: PostType = {
        id: '5',
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.newMessageBody;
      this._callSubscriber();
    } else if (action.type === SEND_MESSAGE) {
      const body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: '6', message: body});
      this._callSubscriber();
    }
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },
};

export type ActionTypes = ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof updateNewMessageBodyActionCreator>
  | ReturnType<typeof sendMessageActionCreator>

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  } as const;
};

export const updateNewPostTextActionCreator = (newPostText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText,
  } as const;
};

export const updateNewMessageBodyActionCreator = (newMessageBody: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageBody: newMessageBody,
  } as const;
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  } as const;
};

// @ts-ignore
window.store = store;
