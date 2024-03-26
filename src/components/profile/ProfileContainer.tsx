import React from 'react';
import { Profile } from 'components/profile/Profile';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/store';
import { getUserProfile, ProfileType } from 'redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from 'hoc/withAuthRedirect';
import {compose} from "redux";

type MapStateToPropsType = {
  profile: null | ProfileType
}

type MapDispatchToProps = {
  getUserProfile: (userID: string) => void
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
  }

  render() {
    return <Profile profile={this.props.profile}/>;
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

