import React from 'react';
import { ProfileInfo } from 'components/profile/profile_info/ProfileInfo';
import { MyPostsContainer } from 'components/profile/my_posts/MyPostsContainer';
import { ProfileType } from 'redux/profile-reducer';

type ProfilePropsType = {
  profile: null | ProfileType
  status: string
  updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status}
                   updateStatus={props.updateStatus}/>
      <MyPostsContainer/>
    </div>
  );
};
