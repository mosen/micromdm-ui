import React from 'react';
import moment from 'moment';
import {storiesOf, action} from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CertificateListDetail from '../CertificateListDetail';

const nothing = () => null;

storiesOf('CertificateListDetail', module)
  .add('empty', () => {
    'use strict';
    const props = {
      lastUpdated: null,
      items: [],
      loading: true,
      expanded: true,
      onRefresh: nothing
    };

    return <MuiThemeProvider><CertificateListDetail {...props} /></MuiThemeProvider>;
  })
  .add('items', () => {
    'use strict';
    const props = {
      items: [
        {
          'common_name': 'micromdm.dev',
          'is_identity': false,
          'data': 'base64encoded'
        },
        {
          'common_name': 'device identity (uuid)',
          'is_identity': true,
          'data': 'base64encoded'
        }
      ],
      lastUpdated: moment().utc(),
      loading: false,
      error: false,
      errorDetail: {},
      expanded: true,
      onRefresh: nothing
    };

    return <MuiThemeProvider><CertificateListDetail {...props} /></MuiThemeProvider>;
  });
