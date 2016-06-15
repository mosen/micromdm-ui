'use strict';

import * as actions from '../actions/api/profiles';
import * as uiActions from '../actions/ui/profiles';

const initialState = {
  items: [],
  loading: false,
  error: false,
  errorDetails: null,
  selection: []
};

export default function profiles (state = initialState, action) {
  switch (action.type) {
    case actions.INDEX_REQUEST:
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
    case actions.INDEX_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        items: action.payload,
        error: false,
        errorDetails: null
      });

    case actions.INDEX_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: true,
        errorDetails: action.payload
      });

    case actions.CREATE_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case actions.CREATE_SUCCESS:
      return Object.assign({}, state, {
        items: state.items.concat(action.payload)
      });
    case actions.CREATE_FAILURE:
      return Object.assign({}, state, {
        error: true,
        errorDetails: action.payload
      });

    case uiActions.CHANGE_SELECTION:
      return Object.assign({}, state, {
        selection: action.payload.map((item) => { return item.payload_identifier; })
      });

    default:
      return state;
  }
}
