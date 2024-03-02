import React from 'react';
import style from './ProfileInfo.module.css';
import backgroundImage from 'assets/images/profile-background.jpg';

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={style.background} src={backgroundImage} alt=""/>
      </div>
      <div className={style.description}>
        ava + description
      </div>
    </div>
  );
};
