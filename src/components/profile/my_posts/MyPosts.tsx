import React from 'react';
import { Post } from 'components/profile/my_posts/post/Post';

import style from './MyPosts.module.css';

export const MyPosts = () => {

  let postsData = [
    {id: '1', post: 'Hello there!', likesAmount: 4},
    {id: '2', post: 'Nice to meet you:)', likesAmount: 6},
  ];

  const posts = postsData.map(post => (
    <Post message={post.post} likesAmount={post.likesAmount}/>
  ));

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
      <div className={style.posts}>{posts}</div>
    </div>
  );
};