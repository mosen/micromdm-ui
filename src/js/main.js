import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './store/configureStore';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const initialState = {};
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

import App from './containers/App';

import Applications from './containers/Applications';
import Devices from './containers/Devices';
import Profiles from './containers/Profiles';
import Workflows from './containers/Workflows';
import EditWorkflow from './containers/EditWorkflow';
import Device from './containers/Device';
import Login from './containers/Login';

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <Route path='/login' component={Login} />
        <Route path='/devices' component={Devices} />
        <Route path='/devices/:uuid' component={Device} />
        <Route path='/applications' component={Applications} />
        <Route path='/profiles' component={Profiles} />
        <Route path='/workflows' component={Workflows} />
        <Route path='/workflows/add' component={EditWorkflow} />
        <Route path='/workflows/edit/:uuid' component={EditWorkflow} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
