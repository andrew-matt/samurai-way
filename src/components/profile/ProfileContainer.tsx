import React from 'react';
import { Profile } from 'components/profile/Profile';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/store';
import {
  getUserProfile,
  getStatus,
  ProfileType,
  updateStatus,
} from 'redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';

type MapStateToPropsType = {
  profile: null | ProfileType
  status: string
}

type MapDispatchToProps = {
  getUserProfile: (userID: string) => void
  getStatus: (userID: string) => void
  updateStatus: (status: string) => void
}

type PathParamsType = {
  userID: string
}

type ProfileContainerPropsType =
  RouteComponentProps<PathParamsType>
  & MapStateToPropsType
  & MapDispatchToProps

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = '2';
    }
    this.props.getUserProfile(userID);
    this.props.getStatus(userID);
  }

  render() {
    return <Profile profile={this.props.profile} status={this.props.status}
                    updateStatus={this.props.updateStatus}/>;
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
)(ProfileContainer);

