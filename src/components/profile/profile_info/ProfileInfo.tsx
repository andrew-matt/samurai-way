import React from 'react';
import profileBackground from 'assets/images/profile/profile-background.jpg';

import style from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={profileBackground} alt="profileBackground"/>
      </div>
      <div className={style.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};