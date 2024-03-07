import React from 'react';
import { ProfileInfo } from 'components/profile/profile_info/ProfileInfo';
import { MyPostsContainer } from 'components/profile/my_posts/MyPostsContainer';

type ProfilePropsType = {}

export const Profile: React.FC<ProfilePropsType> = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer />
    </div>
  );
};
