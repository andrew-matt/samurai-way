import React from 'react';
import style from './Users.module.css';
import { UsersPropsType } from 'components/users/UsersContainer';
import photo from 'assets/avatars/user.png';

export const Users: React.FC<UsersPropsType> = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: '1',
        photo: photo,
        followed: false,
        fullName: 'John',
        status: 'Hell yeah!',
        location: {country: 'United States', city: 'Boston'},
      },
      {
        id: '2',
        photo: photo,
        followed: false,
        fullName: 'Helen',
        status: 'Dear old days, I miss you',
        location: {country: 'Japan', city: 'Tokyo'},
      },
      {
        id: '3',
        photo: photo,
        followed: true,
        fullName: 'Bob',
        status: 'Life has no Ctrl + Z',
        location: {country: 'Mexico', city: 'Mexico City'},
      },
      {
        id: '4',
        photo: photo,
        followed: true,
        fullName: 'Ann',
        status: 'War never changes',
        location: {country: 'Russia', city: 'Moscow'},
      },
      {
        id: '5',
        photo: photo,
        followed: false,
        fullName: 'Noah',
        status: 'Small steps every day',
        location: {country: 'United Kingdom', city: 'London'},
      },
    ]);
  }

  const onFollowButtonClick = (userID: string) => {
    props.follow(userID);
  };

  const onUnfollowButtonClick = (userID: string) => {
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
                  <img src={user.photo} alt={'avatar'}/>
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
                  <div>{user.fullName}</div>
                  <div>{user.status}</div>
                </div>
                <div className={style.userLocation}>
                  <div>{user.location.country}</div>
                  <div>{user.location.city}</div>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};
