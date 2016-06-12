import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
