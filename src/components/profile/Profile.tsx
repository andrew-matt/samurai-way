import React from 'react';
import { MyPosts } from 'components/profile/my_posts/MyPosts';
import { ProfileInfo } from 'components/profile/profile_info/ProfileInfo';
import { ActionTypes, ProfilePageType } from 'redux/state';

type ProfilePropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}
               dispatch={props.dispatch}/>
    </div>
  );
};
