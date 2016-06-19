import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import api from './api';
import devices from './devices';
import profiles from './profiles';
import uploads from './uploads';
import workflows from './workflows';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  api,
  devices,
  profiles,
  uploads,
  workflows
});

export default rootReducer;
