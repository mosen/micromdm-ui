import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import api from './api';
import applications from './applications';
import commands from './commands';
import devices from './devices';
import profiles from './profiles';
import notifications from './notifications';
import uploads from './uploads';
import workflows from './workflows';
import workflow from './workflow';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  api,
  applications,
  commands,
  devices,
  profiles,
  notifications,
  uploads,
  workflow,
  workflows
});

export default rootReducer;
