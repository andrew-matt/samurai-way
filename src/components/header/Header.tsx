import React from 'react';
import logo from 'assets/icons/logo.png';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
}

export const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo"/>
      <div className={style.loginBlock}>
        {
          props.isAuth
          ? <span>{props.login}</span>
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
};
