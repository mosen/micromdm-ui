'use strict';
import moment from 'moment';
import * as api from '../../actions/api/devices';

const initialState = {
  lastUpdated: null,
  loading: false,
  error: false,
  errorDetails: {},
  items: []
};

export default function certificates (state = initialState, action) {
  switch (action.type) {
    case api.CERTS_INDEX_REQUEST:
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
    case api.CERTS_INDEX_FAILURE:
      return {
        ...state,
        error: true,
        errorDetails: action.payload,
        loading: false
      };
    case api.CERTS_INDEX_SUCCESS:
      if (action.payload === null) {
        action.payload = [];
      }
      return {
        ...state,
        lastUpdated: moment().utc(),
        items: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
