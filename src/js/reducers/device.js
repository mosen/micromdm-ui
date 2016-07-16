'use strict';
import {combineReducers} from 'redux';

import device from './device/device';
import certificates from './device/certificates';
import profiles from './device/profiles';
import updates from './device/updates';

const deviceReducer = combineReducers({
  device,
  certificates,
  profiles,
  updates
});

export default deviceReducer;
