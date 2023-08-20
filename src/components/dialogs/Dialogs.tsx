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
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message: FC<MessagePropsType> = (props) => {
  return (
    <div className={style.message}>{props.message}</div>
  );
};

export const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem id={'1'} name={'John'}/>
        <DialogItem id={'2'} name={'Bob'}/>
        <DialogItem id={'3'} name={'Ann'}/>
        <DialogItem id={'4'} name={'Helen'}/>
        <DialogItem id={'5'} name={'Alice'}/>
      </div>
      <div className={style.messages}>
        <Message message={'Hi'}/>
        <Message message={'Good day'}/>
        <Message message={'Hello'}/>
      </div>
    </div>
  );
};