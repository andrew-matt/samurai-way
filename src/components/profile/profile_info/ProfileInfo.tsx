import React from 'react';
import style from './ProfileInfo.module.css';
import backgroundImage from 'assets/images/profile-background.jpg';
import { ProfileType } from 'redux/profile-reducer';
import user from 'assets/avatars/user.png';
import { Preloader } from 'components/common/preloader/Preloader';

type ProfileInfoPropsType = {
  profile: null | ProfileType
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
  if (!props.profile) {
    return <Preloader/>;
  }

  return (
    <div>
      <div>
        <img className={style.background} src={backgroundImage} alt="background"/>
      </div>
      <div className={style.description}>
        <img src={props.profile.photos.large ? props.profile.photos.large : user}
             alt={'avatar'}/>
      </div>
    </div>
  );
};
