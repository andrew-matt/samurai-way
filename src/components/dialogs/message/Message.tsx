import React from 'react';
import style from './Message.module.css';
import { MessageType } from 'redux/redux-store';

export const Message: React.FC<MessageType> = (props) => {
  return (
    <div className={style.dialog}>{props.message}</div>
  );
};
