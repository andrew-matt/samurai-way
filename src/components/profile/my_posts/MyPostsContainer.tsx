import React from 'react';
import { ActionTypes, PostType } from 'redux/redux-store';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from 'redux/profile-reducer';
import { MyPosts } from 'components/profile/my_posts/MyPosts';

type MyPostsPropsType = {
  posts: PostType[]
  newPostText: string
  dispatch: (action: ActionTypes) => void
}


export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
  const onPostChange = (newPostText: string) => {
    props.dispatch(updateNewPostTextActionCreator(newPostText));
  };

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts posts={props.posts} newPostText={props.newPostText}
             updateNewPostText={onPostChange} addPost={addPost}/>
  );
};
