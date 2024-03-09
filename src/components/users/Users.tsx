import React from 'react';
import style from './Users.module.css';
import { UsersPropsType } from 'components/users/UsersContainer';
import userAvatar from 'assets/avatars/user.png';
import axios from 'axios';

export class Users extends React.Component<UsersPropsType> {

  constructor(props: UsersPropsType) {
    super(props);

    axios.get('https://social-network.samuraijs.com/api/1.0//users').then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  onFollowButtonClick = (userID: number) => {
    this.props.follow(userID);
  };

  onUnfollowButtonClick = (userID: number) => {
    this.props.unfollow(userID);
  };

  render() {

    return (
      <div className={style.userContainer}>
        {
          this.props.users.map(user => {
            return (
              <div key={user.id} className={style.userBlock}>
                <div className={style.userPhotoWrapper}>
                  <div>
                    <img src={user.photos.large !== null ? user.photos.large : userAvatar}
                         alt={'avatar'}/>
                  </div>
                  {
                    user.followed
                      ? <button className={style.followButton}
                                onClick={() => this.onFollowButtonClick(user.id)}>Unfollow</button>
                      : <button className={style.followButton}
                                onClick={() => this.onUnfollowButtonClick(user.id)}>Follow</button>
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
  }
}
