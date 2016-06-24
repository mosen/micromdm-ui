'use strict';

import * as actions from '../actions/ui/snackbar';

const initialState = {
  snackbar: {
    visible: false,
    message: ''
  }
};

export default function notifications (state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_SNACKBAR:
      return {...state, snackbar: {visible: true, message: action.payload}};
    case actions.HIDE_SNACKBAR:
      return {...state, snackbar: {visible: false, message: ''}};
    default:
      return state;
  }
}
