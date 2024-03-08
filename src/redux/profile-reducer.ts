import { ActionTypes } from 'redux/redux-store';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostType = {
  id: string
  message: string
  likesCount: number
}

const initialState = {
  posts: [
    {id: '1', message: 'May the force be with you', likesCount: 15},
    {
      id: '2',
      message: 'These aren\'t the droids you\'re looking for',
      likesCount: 20,
    },
  ] as PostType[],
  newPostText: '',
};

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostType = {
        id: '5',
        message: state.newPostText,
        likesCount: 0,
      };

      return  {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return  {
        ...state,
        newPostText: action.newPostText,
      };
    }
    default:
      return state;
  }
};

export type ProfileReducerActionTypes = ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>

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