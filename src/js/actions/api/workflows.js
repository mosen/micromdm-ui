'use strict';

import {CALL_API} from 'redux-api-middleware';
import {REDUX_NS, JSON_HEADERS} from '../constants';

const NS = REDUX_NS.concat('workflows/');
import {endpoint, jwtHeaders} from '../util/login';

export const CREATE_REQUEST = NS.concat('CREATE_REQUEST');
export const CREATE_SUCCESS = NS.concat('CREATE_SUCCESS');
export const CREATE_FAILURE = NS.concat('CREATE_FAILURE');

export function create (workflowData) {
  return {
    [CALL_API]: {
      endpoint: endpoint('/management/v1/workflows'),
      method: 'POST',
      types: [
        CREATE_REQUEST,
        CREATE_SUCCESS,
        CREATE_FAILURE
      ],
      headers: jwtHeaders(JSON_HEADERS),
      body: JSON.stringify(workflowData)
    }
  };
}

export const INDEX_REQUEST = NS.concat('INDEX_REQUEST');
export const INDEX_SUCCESS = NS.concat('INDEX_SUCCESS');
export const INDEX_FAILURE = NS.concat('INDEX_FAILURE');

export function index () {
  return {
    [CALL_API]: {
      endpoint: endpoint('/management/v1/workflows'),
      method: 'GET',
      types: [
        INDEX_REQUEST,
        INDEX_SUCCESS,
        INDEX_FAILURE
      ],
      headers: jwtHeaders(JSON_HEADERS)
    }
  };
}

export const DESTROY_REQUEST = NS.concat('DESTROY_REQUEST');
export const DESTROY_SUCCESS = NS.concat('DESTROY_SUCCESS');
export const DESTROY_FAILURE = NS.concat('DESTROY_FAILURE');

export function destroy (uuid) {
  return {
    [CALL_API]: {
      endpoint: endpoint(`/management/v1/workflows/${uuid}`),
      method: 'DELETE',
      types: [
        DESTROY_REQUEST,
        DESTROY_SUCCESS,
        DESTROY_FAILURE
      ],
      headers: jwtHeaders(JSON_HEADERS)
    }
  };
}

export const UPDATE_REQUEST = NS.concat('UPDATE_REQUEST');
export const UPDATE_SUCCESS = NS.concat('UPDATE_SUCCESS');
export const UPDATE_FAILURE = NS.concat('UPDATE_FAILURE');

export function update (uuid) {
  return {
    [CALL_API]: {
      endpoint: endpoint(`/management/v1/workflows/${uuid}`),
      method: 'PATCH',
      types: [
        UPDATE_REQUEST,
        UPDATE_SUCCESS,
        UPDATE_FAILURE
      ],
      headers: jwtHeaders(JSON_HEADERS)
    }
  };
}
