'use strict';

import * as actions from '../actions/api/devices';
import * as uiActions from '../actions/ui/devices';

const initialState = {
  items: [],
  loading: false,
  error: false,
  errorDetails: null,
  selection: [],
  selectionMenuVisible: false,
  selectionMenuAnchor: null
};

export default function devices (state = initialState, action) {
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

    case uiActions.CHANGE_SELECTION:
      return Object.assign({}, state, {
        selection: action.payload.map((item) => { return item.uuid; })
      });

    case uiActions.SELECTION_MENU_VISIBLE:
      return Object.assign({}, state, {
        selectionMenuVisible: action.payload.visible,
        selectionMenuAnchor: action.payload.anchorElement
      });
    default:
      return state;
  }
}
