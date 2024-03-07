import React from 'react';
import { ProfileInfo } from 'components/profile/profile_info/ProfileInfo';
import { ActionTypes, ProfilePageType } from 'redux/redux-store';
import { MyPostsContainer } from 'components/profile/my_posts/MyPostsContainer';

type ProfilePropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer posts={props.profilePage.posts}
                        newPostText={props.profilePage.newPostText}
                        dispatch={props.dispatch}/>
    </div>
  );
};
