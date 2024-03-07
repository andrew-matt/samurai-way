import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from 'redux/dialogs-reducer';
import { Dialogs } from 'components/dialogs/Dialogs';
import { StoreContext } from 'StoreContext';

type DialogsPropsType = {}

export const DialogsContainer: React.FC<DialogsPropsType> = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const onNewMessageChange = (newMessageBody: string) => {
            store.dispatch(updateNewMessageBodyActionCreator(newMessageBody));
          };

          const onSendMessageClick = () => {
            store.dispatch(sendMessageActionCreator());
          };

          return <Dialogs dialogsPage={store.getState().dialogsPage}
                          updateNewMessageBody={onNewMessageChange}
                          sendMessage={onSendMessageClick}/>;
        }
      }
    </StoreContext.Consumer>
  );
};
