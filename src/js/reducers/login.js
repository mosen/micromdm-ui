'use strict';

import * as actions from '../actions/connection';

const initialState = {
  endpoint: 'https://localhost:8443/',
  jwt_token: ''
};

export default function login (state = initialState, action) {
  switch (action.type) {
    case actions.SET_ENDPOINT:
      return Object.assign({}, state, {
        endpoint: action.payload
      });
    default:
      return state;
  }
}
