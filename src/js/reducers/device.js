'use strict';

import * as actions from '../actions/ui/device';
import * as apiActions from '../actions/api/devices';

const initialState = {
  error: false,
  errorDetail: null,
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
        error: true,
        errorDetail: action.payload
      });
    case apiActions.READ_SUCCESS:
      return Object.assign({}, state, {
        attributes: action.payload
      });
    default:
      return state;
  }
}
