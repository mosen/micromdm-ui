'use strict';

import {REDUX_NS} from '../constants';
const NS = REDUX_NS.concat('ui/login/');

export const LOGIN_DIALOG_VISIBLE = NS.concat('LOGIN_DIALOG_VISIBLE');

export function setLoginDialogVisible (isVisible = true) {
  return {
    type: LOGIN_DIALOG_VISIBLE,
    payload: {
      visible: isVisible
    }
  };
}
