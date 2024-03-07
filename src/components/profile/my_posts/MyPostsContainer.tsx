import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from 'redux/profile-reducer';
import { MyPosts } from 'components/profile/my_posts/MyPosts';
import { StoreContext } from 'StoreContext';

type MyPostsPropsType = {}


export const MyPostsContainer: React.FC<MyPostsPropsType> = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const onPostChange = (newPostText: string) => {
            store.dispatch(updateNewPostTextActionCreator(newPostText));
          };

          const addPost = () => {
            store.dispatch(addPostActionCreator());
          };


          return <MyPosts posts={store.getState().profilePage.posts}
                   newPostText={store.getState().profilePage.newPostText}
                   updateNewPostText={onPostChange}
                   addPost={addPost}/>
        }
      }
    </StoreContext.Consumer>
  );
};
