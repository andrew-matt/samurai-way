import React from 'react';
import style from './Preloader.module.css';
import preloader from 'assets/preloader/preloader.svg';

export const Preloader = () => {
  return (
    <div className={style.preloaderWrapper}>
      <img src={preloader} alt={'preloader'}/>
    </div>
  );
};
