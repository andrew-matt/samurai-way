import React from 'react';
import style from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import { DialogType } from 'redux/redux-store';

export const DialogItem: React.FC<DialogType> = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};
