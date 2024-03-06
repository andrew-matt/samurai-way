import React, { ChangeEvent } from 'react';
import style from './MyPosts.module.css';
import { Post } from 'components/profile/my_posts/post/Post';
import {
  ActionTypes,
  addPostActionCreator,
  PostType,
  updateNewPostTextActionCreator,
} from 'redux/state';

type MyPostsPropsType = {
  posts: PostType[]
  dispatch: (action: ActionTypes) => void
  newPostText: string
}



export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postsElements = props.posts.map(post => <Post key={post.id} id={post.id}
                                                      message={post.message}
                                                      likesCount={post.likesCount}/>);

  const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewPostTextActionCreator(event.currentTarget.value));
  };

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
};
