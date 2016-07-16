import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Header';

storiesOf('Header', module)
  .add('default', () => {
    'use strict';
    return <MuiThemeProvider><Header /></MuiThemeProvider>;
  });
