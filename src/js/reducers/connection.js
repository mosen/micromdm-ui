'use strict';

import * as actions from '../actions/connection';

const initialState = {
  endpoint: 'https://localhost:8443/'
};

export default function connection (state = initialState, action) {
  switch (action.type) {
    case actions.SET_ENDPOINT:
      return Object.assign({}, state, {
        endpoint: action.payload.endpoint
      });
    default:
      return state;
  }
}
