'use strict';

import {REDUX_NS} from '../constants';
const NS = REDUX_NS.concat('workflows/');

export const CHANGE_SELECTION = NS.concat('CHANGE_SELECTION');

export function changeSelection (selection) {
  return {
    type: CHANGE_SELECTION,
    payload: selection
  };
}
