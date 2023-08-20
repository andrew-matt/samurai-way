import React from 'react';
import { MyPosts } from 'components/profile/my_posts/MyPosts';
import { ProfileInfo } from 'components/profile/profile_info/ProfileInfo';

export const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  );
};