import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {Provider} from 'react-redux';
import {storiesOf, action} from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginDialog from '../LoginDialog';

const store = createStore(
  combineReducers({ form: formReducer }),
  {}
);

storiesOf('LoginDialog', module)
  .add('default', () => {
    'use strict';
    return (<MuiThemeProvider>
      <Provider store={store}>
        <LoginDialog />
      </Provider>
    </MuiThemeProvider>);
  });
