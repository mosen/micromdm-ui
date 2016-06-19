'use strict';

import * as actions from '../actions/ui/uploads';

const initialState = {
  files: {},
  isOver: false
};

export default function uploads (state = initialState, action) {
  switch (action.type) {
    case actions.DRAG_OVER:
      return Object.assign({}, state, {
        isOver: true
      });
    case actions.DRAG_LEAVE:
      return Object.assign({}, state, {
        isOver: false
      });
    case actions.DROP:
      return Object.assign({}, state, {
        isOver: false,
        files: action.payload.files
      });
    default:
      return state;
  }
}
