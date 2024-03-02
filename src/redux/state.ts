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
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost: PostType = {
        id: '5',
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber();
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber();
    }
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },
};

export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>;

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST',
  } as const;
};

export const updateNewPostTextActionCreator = (newPostText: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: newPostText
  } as const;
};

// @ts-ignore
window.store = store;
