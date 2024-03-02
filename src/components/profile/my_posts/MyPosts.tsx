import React, { ChangeEvent } from 'react';
import style from './MyPosts.module.css';
import { Post } from 'components/profile/my_posts/post/Post';
import { PostType } from 'redux/state';

type MyPostsPropsType = {
  posts: PostType[]
  addPost: () => void
  updateNewPostText: (newPostText: string) => void
  newPostText: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postsElements = props.posts.map(post => <Post key={post.id} id={post.id}
                                                      message={post.message}
                                                      likesCount={post.likesCount}/>);

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(event.currentTarget.value);
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
