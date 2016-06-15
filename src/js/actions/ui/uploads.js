'use strict';

import {REDUX_NS} from '../constants';

const NS = REDUX_NS.concat('uploads/');

export const SELECT_FILES = NS.concat('SELECT_FILES');

export function selectFiles (fileList) {
  return {
    type: SELECT_FILES,
    payload: fileList
  };
}


export const DRAG_OVER = NS.concat('DRAG_OVER');

export function dragOver (id) {
  return {
    type: DRAG_OVER,
    payload: { id }
  };
}
