'use strict';

import {CALL_API} from 'redux-api-middleware';
import {REDUX_NS, JSON_HEADERS} from '../constants';

const NS = REDUX_NS.concat('profiles/');

export const INDEX_REQUEST = NS.concat('INDEX_REQUEST');
export const INDEX_SUCCESS = NS.concat('INDEX_SUCCESS');
export const INDEX_FAILURE = NS.concat('INDEX_FAILURE');

export function index () {
  return {
    [CALL_API]: {
      endpoint: '/management/v1/profiles',
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

export const READ_REQUEST = NS.concat('READ_REQUEST');
export const READ_SUCCESS = NS.concat('READ_SUCCESS');
export const READ_FAILURE = NS.concat('READ_FAILURE');

export function read (uuid) {
  return {
    [CALL_API]: {
      endpoint: `/management/v1/profiles/${uuid}`,
      method: 'GET',
      types: [
        READ_REQUEST,
        READ_SUCCESS,
        READ_FAILURE
      ],
      headers: JSON_HEADERS
    }
  };
}

export const DESTROY_REQUEST = NS.concat('DESTROY_REQUEST');
export const DESTROY_SUCCESS = NS.concat('DESTROY_SUCCESS');
export const DESTROY_FAILURE = NS.concat('DESTROY_FAILURE');

export function destroy (uuid) {
  return {
    [CALL_API]: {
      endpoint: `/management/v1/profiles/${uuid}`,
      method: 'DELETE',
      types: [
        DESTROY_REQUEST,
        DESTROY_SUCCESS,
        DESTROY_FAILURE
      ],
      headers: JSON_HEADERS
    }
  };
}

export const CREATE_REQUEST = NS.concat('CREATE_REQUEST');
export const CREATE_SUCCESS = NS.concat('CREATE_SUCCESS');
export const CREATE_FAILURE = NS.concat('CREATE_FAILURE');

export function create (payloadIdentifier, payloadData) {
  return {
    [CALL_API]: {
      endpoint: '/management/v1/profiles',
      method: 'POST',
      types: [
        CREATE_REQUEST,
        CREATE_SUCCESS,
        CREATE_FAILURE
      ],
      headers: JSON_HEADERS,
      body: JSON.stringify({
        'payload_identifier': payloadIdentifier,
        'payload_data': payloadData
      })
    }
  };
}
