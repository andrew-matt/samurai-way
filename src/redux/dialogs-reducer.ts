import { ActionTypes } from 'redux/redux-store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogType = {
  id: string
  name: string
}

export type MessageType = {
  id: string
  message: string
}

export type InitialStateType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessageBody: string
}
const initialState: InitialStateType = {
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
};

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.newMessageBody,
      };
    }
    case SEND_MESSAGE: {
      const body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: '6', message: body}],
      };
    }
    default:
      return state;
  }
};

export type DialogsReducerActionTypes =
  ReturnType<typeof updateNewMessageBodyActionCreator>
  | ReturnType<typeof sendMessageActionCreator>

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