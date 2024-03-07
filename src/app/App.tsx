import React from 'react';
import style from './App.module.css';
import { Header } from 'components/header/Header';
import { Navbar } from 'components/navbar/Navbar';
import { Profile } from 'components/profile/Profile';
import { Route } from 'react-router-dom';
import { News } from 'components/news/News';
import { Music } from 'components/music/Music';
import { Settings } from 'components/settings/Settings';
import { ActionTypes, RootStateType } from 'redux/redux-store';
import { DialogsContainer } from 'components/dialogs/DialogsContainer';

type AppPropsType = {
  state: RootStateType
  dispatch: (action: ActionTypes) => void
}

export const App: React.FC<AppPropsType> = (props) => {
  return (
    <div className={style.appWrapper}>
      <Header/>
      <Navbar/>
      <div className={style.appWrapperContent}>
        <Route path="/dialogs"
               render={() => <DialogsContainer dialogsPage={props.state.dialogsPage}
                                               dispatch={props.dispatch}/>}/>
        <Route path="/profile"
               render={() => <Profile profilePage={props.state.profilePage}
                                      dispatch={props.dispatch}/>}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
      </div>
    </div>
  );
};
