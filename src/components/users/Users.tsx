import React from 'react';
import style from './Users.module.css';
import { UsersPropsType } from 'components/users/UsersContainer';
import userAvatar from 'assets/avatars/user.png';
import axios from 'axios';

export const Users: React.FC<UsersPropsType> = (props) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0//users').then(response => {
      props.setUsers(response.data.items);
    })
  }

  const onFollowButtonClick = (userID: number) => {
    props.follow(userID);
  };

  const onUnfollowButtonClick = (userID: number) => {
    props.unfollow(userID);
  };

  return (
    <div className={style.userContainer}>
      {
        props.users.map(user => {
          return (
            <div key={user.id} className={style.userBlock}>
              <div className={style.userPhotoWrapper}>
                <div>
                  <img src={user.photos.large !== null ? user.photos.large : userAvatar} alt={'avatar'}/>
                </div>
                {
                  user.followed
                    ? <button className={style.followButton}
                              onClick={() => onFollowButtonClick(user.id)}>unfollow</button>
                    : <button className={style.followButton}
                              onClick={() => onUnfollowButtonClick(user.id)}>follow</button>
                }
              </div>
              <div className={style.userInfo}>
                <div className={style.userName}>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};
