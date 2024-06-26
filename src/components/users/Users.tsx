import React from 'react';
import style from './Users.module.css';
import userAvatar from 'assets/avatars/user.png';
import { UserType } from 'redux/users-reducer';
import { NavLink } from 'react-router-dom';

type UsersPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  followUser: (userID: number) => void
  unfollowUser: (userID: number) => void
  onPageNumberClick: (currentPage: number) => void
  followingInProgress: number[]
}

export const Users: React.FC<UsersPropsType> = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];

    const currentPage = props.currentPage;
    const lastPage = pagesCount;
    const displayedPagesCount = 10;

    if (currentPage < displayedPagesCount) {
      for (let i = 1; i <= displayedPagesCount; i++) {
        pages.push(i);
      }
    } else if (pagesCount - currentPage < displayedPagesCount / 2) {
      for (let i = currentPage - displayedPagesCount / 2; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      for (let i = currentPage - displayedPagesCount / 2; i <= currentPage + displayedPagesCount / 2; i++) {
        pages.push(i);
      }
    }

    const onUnfollowButtonClick = (userID: number) => {
      props.unfollowUser(userID);
    };

    const onFollowButtonClick = (userID: number) => {
      props.followUser(userID);
    };

    return (
      <div className={style.userContainer}>
        {
          props.users.map(user => {
            return (
              <div key={user.id} className={style.userBlock}>
                <div className={style.userPhotoWrapper}>
                  <NavLink to={'/profile/' + user.id}>
                    <div>
                      <img src={user.photos.large !== null ? user.photos.large : userAvatar}
                           alt={'avatar'}/>
                    </div>
                  </NavLink>
                  {
                    user.followed
                      ? <button className={style.followButton}
                                disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => onUnfollowButtonClick(user.id)}>Unfollow</button>
                      : <button className={style.followButton}
                                disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => onFollowButtonClick(user.id)}>Follow</button>
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
        <div className={style.pageNumbersWrapper}>
          {
            props.currentPage > 1 &&
            <>
              <div className={style.pageNumber}
                   onClick={() => props.onPageNumberClick(1)}>First
              </div>
              <div className={style.pageNumber}
                   onClick={() => props.onPageNumberClick(currentPage - 1)}>Previous
              </div>
            </>
          }
          {
            pages.map(page => {
              return <span
                key={page}
                className={currentPage === page ? style.currentPage : style.pageNumber}
                onClick={() => props.onPageNumberClick(page)}>{page}</span>;
            })
          }
          {
            props.currentPage < lastPage &&
            <>
              <div className={style.pageNumber}
                   onClick={() => props.onPageNumberClick(currentPage + 1)}>Next
              </div>
              <div className={style.pageNumber}
                   onClick={() => props.onPageNumberClick(lastPage)}>Last
              </div>
            </>
          }
        </div>
      </div>
    );
  }
;
