import { ActionTypes, DialogsPageType } from 'redux/state';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsReducerActionTypes = ReturnType<typeof updateNewMessageBodyActionCreator>
  | ReturnType<typeof sendMessageActionCreator>

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
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