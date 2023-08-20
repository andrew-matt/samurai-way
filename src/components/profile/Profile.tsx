import React from 'react';
import content from 'assets/images/profile-background.jpg';

import style from './Profile.module.css';
import MyPosts from 'components/profile/my_posts/MyPosts';

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src={content} alt="content"/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
  );
};

export default Profile;