import { ActionTypes, DialogsPageType } from 'redux/redux-store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsReducerActionTypes = ReturnType<typeof updateNewMessageBodyActionCreator>
  | ReturnType<typeof sendMessageActionCreator>

const initialState = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newMessageBody;
      return state;
    case SEND_MESSAGE:
      const body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: '6', message: body});
      return state;
    default:
      return state;
  }
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