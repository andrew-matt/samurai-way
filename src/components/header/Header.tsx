import React from 'react';
import logo from 'assets/icons/logo.png';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

export const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo"/>
      <div className={style.loginBlock}>
        {
          props.isAuth
            ? <div>
              <span>{props.login} - </span>
              <button onClick={props.logout}>Log out</button>
              </div>
            : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
};
