import { Dispatch } from 'redux';
import { profileAPI, usersAPI } from 'api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

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
  profile: null as null | ProfileType,
  status: '',
};

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostType = {
        id: '5',
        message: action.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

// actions
export type ProfileReducerActionsType = ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>

export const addPostActionCreator = (newPostText: string) => {
  return {
    type: ADD_POST,
    newPostText,
  } as const;
};

const setUserProfile = (profile: ProfileType) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  } as const;
};

const setStatus = (status: string) => {
  return {
    type: SET_STATUS,
    status,
  } as const;
};

// thunks
export const getUserProfile = (userID: string) => {
  return (dispatch: Dispatch) => {
    usersAPI.getProfile(userID).then(data => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userID: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.getStatus(userID).then(data => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};