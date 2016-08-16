'use strict';

import * as actions from '../actions/api/commands';

const initialState = {
  command: null,
  success: null,
  lastUuid: '',
  byDeviceUDID: {}
};

export default function commands (state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_REQUEST:
      return Object.assign({}, state, {
        command: action.payload.request_type
      });

    case actions.CREATE_SUCCESS:
      return Object.assign({}, state, {
        success: true,
        lastUuid: action.payload.CommandUUID,
        command: action.payload.Command.request_type
      });
    case actions.CREATE_FAILURE:
      return Object.assign({}, state, {
        success: false,
        errorDetails: action.payload
      });
    case actions.INDEX_SUCCESS:
      return state;
    default:
      return state;
  }
}
