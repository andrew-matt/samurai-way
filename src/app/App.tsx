import React from 'react';
import style from './App.module.css';
import { Header } from 'components/header/Header';
import { Navbar } from 'components/navbar/Navbar';
import { Profile } from 'components/profile/Profile';
import { Dialogs } from 'components/dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { News } from 'components/news/News';
import { Music } from 'components/music/Music';
import { Settings } from 'components/settings/Settings';
import { RootStateType } from 'redux/state';

type AppPropsType = {
  state: RootStateType
  addPost: () => void
  updateNewPostText: (newPostText: string) => void
}

export const App: React.FC<AppPropsType> = (props) => {
  return (
    <div className={style.appWrapper}>
      <Header/>
      <Navbar/>
      <div className={style.appWrapperContent}>
        <Route path="/dialogs"
               render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
        <Route path="/profile"
               render={() => <Profile profilePage={props.state.profilePage}
                                      addPost={props.addPost}
                                      updateNewPostText={props.updateNewPostText}/>}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
      </div>
    </div>
  );
};
