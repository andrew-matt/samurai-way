import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import 'index.css';
import React from 'react';
import { store } from 'redux/redux-store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
