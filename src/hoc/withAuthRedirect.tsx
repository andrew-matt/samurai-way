import React, { ComponentType } from 'react';
import { Redirect } from 'react-router-dom';
import { AppStateType } from 'redux/store';
import { connect } from 'react-redux';

type MapStateToPropsType = {
  isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: MapStateToPropsType) => {
    const {isAuth, ...restProps} = props;

    if (!isAuth) return <Redirect to={'/login'}/>;
    return <Component {...restProps as T}/>;
  };

  return connect(mapStateToProps)(RedirectComponent);
}