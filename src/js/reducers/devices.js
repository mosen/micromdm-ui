'use strict';

import * as actions from '../actions/api/devices';

const initialState = {
  items: [],
  loading: false,
  error: false
};

export default function devices (state = initialState, action) {
  switch (action.type) {
    case actions.INDEX_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });

    case actions.INDEX_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        items: {}
      });

    case actions.INDEX_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: true
      });
    default:
      return state;
  }
}
