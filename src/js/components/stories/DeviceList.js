import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DeviceList from '../DeviceList';

const nothing = () => null;

storiesOf('DeviceList', module)
  .add('loading', () => {
    'use strict';

    const props = {
      items: [],
      loading: true,
      onSelectionChange: nothing
    };

    return <MuiThemeProvider><DeviceList {...props} /></MuiThemeProvider>;
  })
  .add('one', () => {
    'use strict';
    const props = {
      selection: [],
      items: [
        {
          device_name: 'Test One',
          serial_number: 'ABCD0001',
          last_checkin: '2016-07-01',
          product_name: 'iMac17,1'
        }
      ],
      loading: false,
      onSelectionChange: nothing
    };

    return <MuiThemeProvider><DeviceList {...props} /></MuiThemeProvider>;
  });
