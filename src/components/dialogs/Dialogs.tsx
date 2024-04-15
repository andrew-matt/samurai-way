import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from 'components/dialogs/dialog_item/DialogItem';
import { Message } from 'components/dialogs/message/Message';
import { DialogsPropsType } from 'components/dialogs/DialogsContainer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from 'utils/validators/validators';
import { Textarea } from 'components/common/forms_controls/FormsControls';

type FormDataType = {
  newMessageBody: string
}

const maxLength30 = maxLengthCreator(30);

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem
    key={dialog.id} id={dialog.id} name={dialog.name}/>);
  const messagesElements = props.dialogsPage.messages.map(message => <Message
    key={message.id} id={message.id} message={message.message}/>);

  const addNewMessage = (values: FormDataType) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
        <AddMessageReduxForm onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'newMessageBody'}
               placeholder={'Enter your message'} validate={[required, maxLength30]}/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm);

