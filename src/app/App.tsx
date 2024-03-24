import React from 'react';
import style from './App.module.css';
import { Navbar } from 'components/navbar/Navbar';
import { Route } from 'react-router-dom';
import { News } from 'components/news/News';
import { Music } from 'components/music/Music';
import { Settings } from 'components/settings/Settings';
import { DialogsContainer } from 'components/dialogs/DialogsContainer';
import UsersContainer from 'components/users/UsersContainer';
import ProfileContainer from 'components/profile/ProfileContainer';
import HeaderContainer from 'components/header/HeaderContainer';
import { Login } from 'components/login/Login';

type AppPropsType = {}

export const App: React.FC<AppPropsType> = () => {
  return (
    <div className={style.appWrapper}>
      <HeaderContainer/>
      <Navbar/>
      <div className={style.appWrapperContent}>
        <Route path="/dialogs"
               render={() => <DialogsContainer/>}/>
        <Route path="/profile/:userID?"
               render={() => <ProfileContainer/>}/>
        <Route path="/users" render={() => <UsersContainer/>}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
        <Route path="/login" render={() => <Login/>}/>
      </div>
    </div>
  );
};
