import React from 'react';
import style from './App.module.css';
import { Header } from 'components/header/Header';
import { Navbar } from 'components/navbar/Navbar';
import { Profile } from 'components/profile/Profile';
import { Route } from 'react-router-dom';
import { News } from 'components/news/News';
import { Music } from 'components/music/Music';
import { Settings } from 'components/settings/Settings';
import { DialogsContainer } from 'components/dialogs/DialogsContainer';
import UsersContainer from 'components/users/UsersContainer';

type AppPropsType = {}

export const App: React.FC<AppPropsType> = () => {
  return (
    <div className={style.appWrapper}>
      <Header/>
      <Navbar/>
      <div className={style.appWrapperContent}>
        <Route path="/dialogs"
               render={() => <DialogsContainer/>}/>
        <Route path="/profile"
               render={() => <Profile/>}/>
        <Route path="/users" render={() => <UsersContainer/>}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
      </div>
    </div>
  );
};
