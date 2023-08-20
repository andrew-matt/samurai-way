import React from 'react';

import style from './Dialogs.module.css';

export const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog}>John</div>
        <div className={style.dialog}>Bob</div>
        <div className={style.dialog}>Ann</div>
        <div className={style.dialog}>Helen</div>
        <div className={style.dialog}>Alice</div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>Good day</div>
        <div className={style.message}>Hello</div>
      </div>
    </div>
  );
};