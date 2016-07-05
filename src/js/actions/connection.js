'use strict';

import {REDUX_NS} from './constants';
const NS = REDUX_NS.concat('connection/');

export const SET_ENDPOINT = NS.concat('SET_ENDPOINT');

export function setEndpoint (endpoint) {
  return {
    type: SET_ENDPOINT,
    payload: endpoint
  };
}

