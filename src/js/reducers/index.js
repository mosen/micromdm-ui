import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import devices from './devices';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  devices
});

export default rootReducer;
