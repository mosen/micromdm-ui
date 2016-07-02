'use strict';

import * as actions from '../actions/ui/device';
import * as apiActions from '../actions/api/devices';

const initialState = {
  loading: false,
  error: false,
  errorDetails: null,
  attributes: {}
};

export default function device (state = initialState, action) {
  switch (action.type) {
    case apiActions.READ_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case apiActions.READ_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: true,
        errorDetails: action.payload
      });
    case apiActions.READ_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        attributes: action.payload
      });
    default:
      return state;
  }
}
