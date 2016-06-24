'use strict';

import {REDUX_NS} from '../constants';
const NS = REDUX_NS.concat('ui/snackbar/');

export const SHOW_SNACKBAR = NS.concat('SHOW_SNACKBAR');

export function showSnackbar (message) {
  return {
    type: SHOW_SNACKBAR,
    payload: message
  };
}

export const HIDE_SNACKBAR = NS.concat('HIDE_SNACKBAR');

export function hideSnackbar (delay = 3000) {
  return {
    type: HIDE_SNACKBAR,
    meta: {
      delay
    }
  };
}
