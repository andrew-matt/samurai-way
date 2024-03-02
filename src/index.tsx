import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import 'index.css';
import React from 'react';
import { store } from 'redux/state';

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

render();

store.subscribe(render);