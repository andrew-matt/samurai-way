import React from 'react';
import { Post } from 'components/profile/my_posts/post/Post';

import style from './MyPosts.module.css'

export const MyPosts = () => {
  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        <Post message={'Hello there!'} likesAmount={4}/>
        <Post message={'Nice to meet you:)'} likesAmount={6}/>
      </div>
    </div>
  );
};