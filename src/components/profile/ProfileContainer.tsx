import React from 'react';
import { Profile } from 'components/profile/Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/redux-store';
import { ProfileType, setUserProfile } from 'redux/profile-reducer';

type MapStateToPropsType = {
  profile: null | ProfileType
}

type MapDispatchToProps = {
  setUserProfile: (data: ProfileType) => void
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return <Profile profile={this.props.profile}/>;
  }
}

const mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
