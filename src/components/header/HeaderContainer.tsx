import React from 'react';
import { Header } from 'components/header/Header';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/store';
import { getAuthUserData, logout } from 'redux/auth-reducer';

type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchToPropsType = {
  getAuthUserData: () => void
  logout: () => void
}

type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props}/>;
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);
