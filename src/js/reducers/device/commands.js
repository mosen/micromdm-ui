'use strict';
import moment from 'moment';
import * as ui from '../../actions/ui/device';
import * as api from '../../actions/api/commands';

const initialState = {
  lastUpdated: null,
  loading: false,
  error: false,
  errorDetails: {},
  items: [],
  expanded: false
};

export default function commands (state = initialState, action) {
  switch (action.type) {
    case ui.SET_COMMAND_LIST_EXPANDED:
      return {
        ...state,
        expanded: action.payload
      };
    case api.INDEX_REQUEST:
      if (action.error) {
        return Object.assign({}, state, {
          error: true,
          errorDetails: action.payload
        });
      } else {
        return Object.assign({}, state, {
          loading: true
        });
      }
    case api.INDEX_FAILURE:
      return {
        ...state,
        error: true,
        errorDetails: action.payload,
        loading: false
      };
    case api.INDEX_SUCCESS:
      if (!action.payload.commands) {
        action.payload = [];
      }
      return {
        ...state,
        lastUpdated: moment().utc(),
        items: action.payload.commands,
        loading: false
      };
    default:
      return state;
  }
}
