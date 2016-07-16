'use strict';
import * as api from '../../actions/api/devices';

const initialState = {
  loading: false,
  error: false,
  errorDetails: null,
  attributes: {}
};

export default function device (state = initialState, action) {
  switch (action.type) {
    case api.READ_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case api.READ_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: true,
        errorDetails: action.payload
      });
    case api.READ_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        attributes: action.payload
      });
    default:
      return state;
  }
}
