import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {Provider} from 'react-redux';
import {storiesOf, action} from '@kadira/storybook';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ExchangePayloadForm from '../payloads/ExchangePayloadForm';

const store = createStore(
  combineReducers({ form: formReducer }),
  {}
);

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

storiesOf('ExchangePayloadForm', module)
  .add('default', () => {
    'use strict';
    return (<MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <div style={{"width": "500px"}}>
          <ExchangePayloadForm />
        </div>
      </Provider>
    </MuiThemeProvider>);
  });
