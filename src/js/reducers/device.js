'use strict';
import {combineReducers} from 'redux';

import device from './device/device';
import certificates from './device/certificates';
import profiles from './device/profiles';
import updates from './device/updates';
import commands from './device/commands';

const deviceReducer = combineReducers({
  device,
  certificates,
  commands,
  profiles,
  updates
});

export default deviceReducer;
