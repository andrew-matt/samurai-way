import React from 'react';
import { Profile } from 'components/profile/Profile';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/store';
import { getUserProfile, ProfileType } from 'redux/profile-reducer';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';

type MapStateToPropsType = {
  profile: null | ProfileType
  isAuth: boolean
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
    if (!this.props.isAuth) {
      return <Redirect to={'/login'}/>;
    }

    return <Profile profile={this.props.profile}/>;
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

const WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent);
