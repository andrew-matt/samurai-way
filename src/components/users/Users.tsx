import React from 'react';
import style from './Users.module.css';
import { UsersPropsType } from 'components/users/UsersContainer';
import userAvatar from 'assets/avatars/user.png';
import axios from 'axios';

export class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onFollowButtonClick = (userID: number) => {
    this.props.follow(userID);
  };

  onUnfollowButtonClick = (userID: number) => {
    this.props.unfollow(userID);
  };

  onPageNumberClick = (currentPage: number) => {
    if (this.props.currentPage !== currentPage) {
      this.props.setCurrentPage(currentPage);
      axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
      });
    }
  };

  render() {

    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [];

    const currentPage = this.props.currentPage;
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
        <div className={style.pageNumbersWrapper}>
          {
            this.props.currentPage > 1 &&
            <>
              <div className={style.pageNumber}
                   onClick={() => this.onPageNumberClick(1)}>First
              </div>
              <div className={style.pageNumber}
                   onClick={() => this.onPageNumberClick(currentPage - 1)}>Previous
              </div>
            </>
          }
          {
            pages.map(page => {
              return <span
                key={page}
                className={currentPage === page ? style.currentPage : style.pageNumber}
                onClick={() => this.onPageNumberClick(page)}>{page}</span>;
            })
          }
          {
            this.props.currentPage < lastPage &&
            <>
              <div className={style.pageNumber}
                   onClick={() => this.onPageNumberClick(currentPage + 1)}>Next
              </div>
              <div className={style.pageNumber}
                   onClick={() => this.onPageNumberClick(lastPage)}>Last
              </div>
            </>
          }
        </div>
      </div>
    );
  }
}
