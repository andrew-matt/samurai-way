import React from 'react';
import { Header } from 'components/header/Header';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/store';
import { setAuthUserData } from 'redux/auth-reducer';
import { authAPI } from 'api/api';

type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchToPropsType = {
  setAuthUserData: (userID: number, email: string, login: string) => void
}

type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    authAPI.authMe().then(data => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
