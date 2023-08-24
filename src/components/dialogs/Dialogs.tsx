import React, { FC } from 'react';

import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type DialogItemPropsType = {
  id: string
  name: string
}

type MessagePropsType = {
  message: string
}

const DialogItem: FC<DialogItemPropsType> = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={style.dialog}>
      <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
    </div>
  );
};

const Message: FC<MessagePropsType> = (props) => {
  return (
    <div className={style.message}>{props.message}</div>
  );
};

export const Dialogs = () => {

  let dialogsData = [
    {id: '1', name: 'John'},
    {id: '2', name: 'Bob'},
    {id: '3', name: 'Ann'},
    {id: '4', name: 'Helen'},
    {id: '5', name: 'Alice'},
  ];

  let messageData = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'Good day'},
    {id: '3', message: 'Hello'},
  ];

  const dialogs = dialogsData.map(dialog => (
    <DialogItem id={dialog.id} name={dialog.name}/>
  ));

  const messages = messageData.map(message => (
    <Message message={message.message}/>
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogs}</div>
      <div className={style.messages}>{messages}</div>
    </div>
  );
};