import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import api from './api';
import applications from './applications';
import commands from './commands';
import device from './device';
import devices from './devices';
import errors from './errors';
import login from './login';
import notifications from './notifications';
import profiles from './profiles';
import uploads from './uploads';
import workflow from './workflow';
import workflows from './workflows';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  api,
  applications,
  commands,
  device,
  devices,
  errors,
  login,
  notifications,
  profiles,
  uploads,
  workflow,
  workflows
});

export default rootReducer;
