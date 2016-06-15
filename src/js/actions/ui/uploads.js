'use strict';

import {REDUX_NS} from '../constants';
const NS = REDUX_NS.concat('uploads/');

export const DRAG_OVER = NS.concat('DRAG_OVER');

export function dragOver (id) {
  return {
    type: DRAG_OVER,
    payload: { id },
    meta: {
      debounce: 'simple'
    }
  };
}

export const DRAG_LEAVE = NS.concat('DRAG_LEAVE');

export function dragLeave (id) {
  return {
    type: DRAG_LEAVE,
    payload: { id }
  };
}

export const DROP = NS.concat('DROP');

export function drop (id, fileList) {
  return {
    type: DROP,
    payload: {
      id,
      files: fileList
    }
  };
}
