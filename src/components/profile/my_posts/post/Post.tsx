import React from 'react';
import style from './Post.module.css';
import user from 'assets/icons/stromtrooper.jpg';
import { PostType } from 'redux/profile-reducer';

export const Post: React.FC<PostType> = (props) => {
  return (
    <div className={style.item}>
      <img src={user} alt=""/>
        {props.message}
      <div>
        <span>likes</span>
        <span> {props.likesCount}</span>
      </div>
    </div>
  );
};

