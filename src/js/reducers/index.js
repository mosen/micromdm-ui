import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import api from './api';
import applications from './applications';
import devices from './devices';
import profiles from './profiles';
import uploads from './uploads';
import workflows from './workflows';
import workflow from './workflow';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  api,
  applications,
  devices,
  profiles,
  uploads,
  workflow,
  workflows
});

export default rootReducer;
