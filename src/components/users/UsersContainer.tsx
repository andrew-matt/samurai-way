import {connect} from 'react-redux';
import {AppStateType} from 'redux/store';
import {
    followUser,
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollowUser,
    UserType,
} from 'redux/users-reducer';
import React from 'react';
import {Users} from 'components/users/Users';
import {Preloader} from 'components/common/preloader/Preloader';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToProps = {
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToProps

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onFollowButtonClick = (userID: number) => {
        this.props.followUser(userID);
    };

    onUnfollowButtonClick = (userID: number) => {
        this.props.unfollowUser(userID);
    };

    onPageNumberClick = (currentPage: number) => {
        if (this.props.currentPage !== currentPage) {
            this.props.getUsers(currentPage, this.props.pageSize);
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
                                 followUser={this.onFollowButtonClick}
                                 unfollowUser={this.onUnfollowButtonClick}
                                 onPageNumberClick={this.onPageNumberClick}
                                 followingInProgress={this.props.followingInProgress}
                        />
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
        followingInProgress: state.usersPage.followingInProgress,
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        getUsers,
        followUser,
        unfollowUser,
    }),
    withAuthRedirect
)(UsersContainer);



