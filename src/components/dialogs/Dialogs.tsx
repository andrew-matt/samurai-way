import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from 'components/dialogs/dialog_item/DialogItem';
import { Message } from 'components/dialogs/message/Message';
import { DialogsPageType } from 'redux/state';

type DialogsPropsType = {
  dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
  const messagesElements = props.dialogsPage.messages.map(message => <Message key={message.id} id={message.id} message={message.message}/>)

  const newMessageElement = React.createRef<HTMLTextAreaElement>();

  const addMessage = () => {
    const message = newMessageElement.current?.value;
    alert(message)
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};
