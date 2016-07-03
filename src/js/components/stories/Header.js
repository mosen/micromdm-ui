import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../Header';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

storiesOf('Header', module)
  .add('default', () => {
    'use strict';
    return <MuiThemeProvider muiTheme={muiTheme}><Header /></MuiThemeProvider>;
  });
