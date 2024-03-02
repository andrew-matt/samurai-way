import React from 'react';
import { MyPosts } from 'components/profile/my_posts/MyPosts';
import { ProfileInfo } from 'components/profile/profile_info/ProfileInfo';
import { ProfilePageType } from 'redux/state';

type ProfilePropsType = {
  profilePage: ProfilePageType
  addPost: () => void
  updateNewPostText: (newPostText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}
               addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};
