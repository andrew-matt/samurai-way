import React from 'react';
import { Profile } from 'components/profile/Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/redux-store';
import { ProfileType, setUserProfile } from 'redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type MapStateToPropsType = {
  profile: null | ProfileType
}

type MapDispatchToProps = {
  setUserProfile: (data: ProfileType) => void
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
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return <Profile profile={this.props.profile}/>;
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
});

const WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent);
