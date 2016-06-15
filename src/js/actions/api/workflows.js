'use strict';

import {CALL_API} from 'redux-api-middleware';
import {REDUX_NS, JSON_HEADERS} from '../constants';

const NS = REDUX_NS.concat('workflows/');
import {ENDPOINT} from '../../config';

export const CREATE_REQUEST = NS.concat('CREATE_REQUEST');
export const CREATE_SUCCESS = NS.concat('CREATE_SUCCESS');
export const CREATE_FAILURE = NS.concat('CREATE_FAILURE');

export function create (workflowData) {
  return {
    [CALL_API]: {
      endpoint: `${ENDPOINT}/management/v1/workflows`,
      method: 'POST',
      types: [
        CREATE_REQUEST,
        CREATE_SUCCESS,
        CREATE_FAILURE
      ],
      headers: JSON_HEADERS,
      body: JSON.stringify(workflowData)
    }
  };
}

// Does not exist yet
export const INDEX_REQUEST = NS.concat('INDEX_REQUEST');
export const INDEX_SUCCESS = NS.concat('INDEX_SUCCESS');
export const INDEX_FAILURE = NS.concat('INDEX_FAILURE');

export function index () {
  return {
    [CALL_API]: {
      endpoint: `${ENDPOINT}/management/v1/workflows`,
      method: 'GET',
      types: [
        INDEX_REQUEST,
        INDEX_SUCCESS,
        INDEX_FAILURE
      ],
      headers: JSON_HEADERS
    }
  };
}
