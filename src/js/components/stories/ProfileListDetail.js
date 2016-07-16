import React from 'react';
import moment from 'moment';
import {storiesOf, action} from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProfileListDetail from '../ProfileListDetail';

const nothing = () => null;

storiesOf('ProfileListDetail', module)
  .add('empty', () => {
    'use strict';
    const props = {
      lastUpdated: null,
      items: [],
      loading: true,
      onRefresh: nothing
    };

    return <MuiThemeProvider><ProfileListDetail {...props} /></MuiThemeProvider>;
  })
  .add('items', () => {
    'use strict';
    const props = {
      items: [
        {
          profile_uuid: 'UUID-HERE',
          payload_identifier: 'io.micromdm.payload',
          profile_data: 'base64encodeddata'
        }
      ],
      lastUpdated: moment().utc(),
      loading: false,
      error: false,
      errorDetail: {},
      expanded: true,
      onRefresh: nothing
    };

    return <MuiThemeProvider><ProfileListDetail {...props} /></MuiThemeProvider>;
  });
