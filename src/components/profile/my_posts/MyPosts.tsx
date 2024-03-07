import React, { ChangeEvent } from 'react';
import style from './MyPosts.module.css';
import { Post } from 'components/profile/my_posts/post/Post';
import { PostType } from 'redux/redux-store';

type MyPostsPropsType = {
  posts: PostType[]
  newPostText: string
  updateNewPostText: (newPostText: string) => void
  addPost: () => void
}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postsElements = props.posts.map(post => <Post key={post.id} id={post.id}
                                                      message={post.message}
                                                      likesCount={post.likesCount}/>);

  const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(event.currentTarget.value);
  };

  const onAddPost = () => {
    props.addPost();
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
};
