import React from 'react';
import { ActionTypes, DialogsPageType } from 'redux/redux-store';
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from 'redux/dialogs-reducer';
import { Dialogs } from 'components/dialogs/Dialogs';

type DialogsPropsType = {
  dialogsPage: DialogsPageType
  dispatch: (action: ActionTypes) => void
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
  const onNewMessageChange = (newMessageBody: string) => {
    props.dispatch(updateNewMessageBodyActionCreator(newMessageBody));
  };

  const onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  };

  return (
    <Dialogs dialogsPage={props.dialogsPage} updateNewMessageBody={onNewMessageChange}
             sendMessage={onSendMessageClick}/>
  );
};
