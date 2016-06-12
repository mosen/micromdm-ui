import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import configureStore from './store/configureStore';

const initialState = { auth: { token: sessionStorage.getItem('auth.token') } };
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

import App from './containers/App';

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
