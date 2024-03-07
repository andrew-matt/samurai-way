import React, { ChangeEvent } from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from 'components/dialogs/dialog_item/DialogItem';
import { Message } from 'components/dialogs/message/Message';
import { DialogsPageType } from 'redux/redux-store';

type DialogsPropsType = {
  dialogsPage: DialogsPageType
  updateNewMessageBody: (newMessageBody: string) => void
  sendMessage: () => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem
    key={dialog.id} id={dialog.id} name={dialog.name}/>);
  const messagesElements = props.dialogsPage.messages.map(message => <Message
    key={message.id} id={message.id} message={message.message}/>);

  const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageBody(event.currentTarget.value);
  };

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
        <div>
          <textarea value={props.dialogsPage.newMessageBody}
                    placeholder={'Enter your message'}
                    onChange={onNewMessageChange}></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send message</button>
        </div>
      </div>
    </div>
  );
};
