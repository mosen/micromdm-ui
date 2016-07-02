'use strict';

import {REDUX_NS} from '../constants';
const NS = REDUX_NS.concat('ui/devices/');

export const CHANGE_SELECTION = NS.concat('CHANGE_SELECTION');

export function changeSelection (selection) {
  return {
    type: CHANGE_SELECTION,
    payload: selection
  };
}

export const SELECTION_MENU_VISIBLE = NS.concat('SELECTION_MENU_VISIBLE');

export function setSelectionMenuVisible (isVisible = true, anchorElement) {
  return {
    type: SELECTION_MENU_VISIBLE,
    payload: {
      visible: isVisible,
      anchorElement
    }
  };
}

export const ERROR_DIALOG_VISIBLE = NS.concat('ERROR_DIALOG_VISIBLE');

export function setErrorDialogVisible (isVisible = true) {
  return {
    type: ERROR_DIALOG_VISIBLE,
    payload: {
      visible: isVisible
    }
  };
}
