import React, { FC } from 'react';
import userIcon from 'assets/images/profile/stromtrooper.jpg';
import style from './Post.module.css';

type PostPropsType = {
  message: string
  likesAmount: number
}

export const Post: FC<PostPropsType> = (props) => {
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