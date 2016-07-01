import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import api from './api';
import applications from './applications';
import commands from './commands';
import device from './device';
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
  device,
  devices,
  profiles,
  notifications,
  uploads,
  workflow,
  workflows
});

export default rootReducer;
