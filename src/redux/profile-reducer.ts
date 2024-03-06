import { ActionTypes, PostType, ProfilePageType } from 'redux/redux-store';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type ProfileReducerActionTypes = ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>

const initialState = {
  posts: [
    {id: '1', message: 'May the force be with you', likesCount: 15},
    {
      id: '2',
      message: 'These aren\'t the droids you\'re looking for',
      likesCount: 20,
    },
  ],
  newPostText: '',
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostType = {
        id: '5',
        message: state.newPostText,
        likesCount: 0,
      };

      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      return state;
    default:
      return state;
  }
};

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