import React from 'react';
import profileBackground from 'assets/images/profile/profile-background.jpg';
import { MyPosts } from 'components/profile/my_posts/MyPosts';

export const Profile = () => {
  return (
    <div>
      <div>
        <img src={profileBackground} alt="profileBackground"/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
  );
};