import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import history from './history';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
  , document.querySelector('#app')
);

registerServiceWorker();
