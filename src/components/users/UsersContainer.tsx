import { connect } from 'react-redux';
import { AppStateType } from 'redux/redux-store';
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  UserType,
} from 'redux/users-reducer';
import React from 'react';
import axios from 'axios';
import { Users } from 'components/users/Users';
import { Preloader } from 'components/common/preloader/Preloader';

type MapStateToPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

type MapDispatchToProps = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (currentPage: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToProps

class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
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
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
        });
    }
  };

  render() {
    return (
      <>
        {
          this.props.isFetching
            ? <Preloader/>
            : <Users users={this.props.users} pageSize={this.props.pageSize}
                     totalUsersCount={this.props.totalUsersCount}
                     currentPage={this.props.currentPage}
                     onFollowButtonClick={this.onFollowButtonClick}
                     onUnfollowButtonClick={this.onUnfollowButtonClick}
                     onPageNumberClick={this.onPageNumberClick}/>
        }
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);



