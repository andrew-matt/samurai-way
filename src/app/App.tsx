import React from 'react';
import style from './App.module.css';
import { Header } from 'components/header/Header';
import { Navbar } from 'components/navbar/Navbar';
import { Route } from 'react-router-dom';
import { News } from 'components/news/News';
import { Music } from 'components/music/Music';
import { Settings } from 'components/settings/Settings';
import { DialogsContainer } from 'components/dialogs/DialogsContainer';
import UsersContainer from 'components/users/UsersContainer';
import ProfileContainer from 'components/profile/ProfileContainer';

type AppPropsType = {}

export const App: React.FC<AppPropsType> = () => {
  return (
    <div className={style.appWrapper}>
      <Header/>
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
      </div>
    </div>
  );
};
