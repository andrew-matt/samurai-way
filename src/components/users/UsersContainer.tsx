import { Users } from 'components/users/Users';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/redux-store';
import { followAC, setUsersAC, unfollowAC, UserType } from 'redux/users-reducer';
import { Dispatch } from 'redux';

type MapStateToPropsType = {
  users: UserType[]
}

type MapDispatchToProps = {
  follow: (userID: string) => void
  unfollow: (userID: string) => void
  setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID) => {
      dispatch(unfollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);



