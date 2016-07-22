'use strict';

import * as actions from '../actions/api/devices';
import * as uiActions from '../actions/ui/devices';

const initialState = {
  items: [],
  loading: false,
  error: false,
  errorDetails: null,
  errorDialogOpen: false,
  selection: [],
  selectionMenuVisible: false,
  selectionMenuAnchor: null,
  workflowDrawerOpen: false
};

export default function devices (state = initialState, action) {
  switch (action.type) {
    case actions.INDEX_REQUEST:
      if (action.error) {
        return Object.assign({}, state, {
          error: true,
          errorDetails: action.payload,
          errorDialogOpen: true
        });
      } else {
        return Object.assign({}, state, {
          loading: true
        });
      }

    case actions.INDEX_SUCCESS:
      const devices = action.payload || [];

      return Object.assign({}, state, {
        loading: false,
        items: devices,
        error: false,
        errorDetails: null
      });

    case actions.INDEX_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: true,
        errorDetails: action.payload,
        errorDialogOpen: true
      });

    case actions.PUSH_REQUEST:
      return state;

    case actions.PUSH_SUCCESS:
      if (action.payload.error) {
        return Object.assign({}, state, {
          error: true,
          errorDetails: action.payload.status
        });
      } else {
        return state;
      }

    case actions.PUSH_FAILURE:
      return Object.assign({}, state, {
        error: true,
        errorDetails: action.payload,
        errorDialogOpen: true
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

    case uiActions.ERROR_DIALOG_VISIBLE:
      return Object.assign({}, state, {
        errorDialogOpen: action.isVisible
      });

    case uiActions.PICK_WORKFLOWS_VISIBLE:
      return Object.assign({}, state, {
        workflowDrawerOpen: action.payload
      });

    default:
      return state;
  }
}
