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
  _callSubscriber: () => void
  addPost: () => void
  updateNewPostText: (newPostText: string) => void
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
  addPost() {
    const newPost: PostType = {
      id: '5',
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber();
  },
  updateNewPostText(newPostText: string) {
    this._state.profilePage.newPostText = newPostText;
    this._callSubscriber();
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },
};

// @ts-ignore
window.store = store;