import { Dispatch } from 'redux';
import { usersAPI } from 'api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export type PostType = {
  id: string
  message: string
  likesCount: number
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string
    large: string
  }
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
  profile: null as null | ProfileType,
};

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostType = {
        id: '5',
        message: state.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newPostText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

type ProfileReducerActionTypes = ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof setUserProfile>

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  } as const;
};

export const updateNewPostTextActionCreator = (newPostText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText,
  } as const;
};

const setUserProfile = (profile: ProfileType) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  } as const;
};

export const getUserProfile = (userID: string) => {
  return (dispatch: Dispatch) => {
    usersAPI.getProfile(userID).then(data => {
      dispatch(setUserProfile(data));
    });
  }
};