import React, { FC } from 'react';
import userIcon from 'assets/images/stromtrooper.jpg';
import style from './Post.module.css';

type PostPropsType = {
  message: string
  likesAmount: number
}

const Post: FC<PostPropsType> = (props) => {
  return (
    <div className={style.item}>
      <img src={userIcon} alt="userIcon"/>
      {props.message}
      <div>
        <span>{props.likesAmount} likes</span>
      </div>
    </div>
  );
};

export default Post;