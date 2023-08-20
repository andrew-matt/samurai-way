import React from 'react';
import { Post } from 'components/profile/my_posts/post/Post';

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message={'Hello there!'} likesAmount={4}/>
        <Post message={'Nice to meet you:)'} likesAmount={6}/>
      </div>
    </div>
  );
};