'use strict';

import {CALL_API} from 'redux-api-middleware';
import {REDUX_NS, JSON_HEADERS} from '../constants';
import {ENDPOINT} from '../../config';

const NS = REDUX_NS.concat('devices/');

export const INDEX_REQUEST = NS.concat('INDEX_REQUEST');
export const INDEX_SUCCESS = NS.concat('INDEX_SUCCESS');
export const INDEX_FAILURE = NS.concat('INDEX_FAILURE');

export function index () {
  return {
    [CALL_API]: {
      endpoint: `${ENDPOINT}/management/v1/devices`,
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
      endpoint: `${ENDPOINT}/management/v1/devices/${uuid}`,
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

export const PUSH_REQUEST = NS.concat('PUSH_REQUEST');
export const PUSH_SUCCESS = NS.concat('PUSH_SUCCESS');
export const PUSH_FAILURE = NS.concat('PUSH_FAILURE');

export function push (udid) {
  return {
    [CALL_API]: {
      endpoint: `${ENDPOINT}/management/v1/devices/${udid}/push`,
      method: 'POST',
      types: [
        PUSH_REQUEST,
        PUSH_SUCCESS,
        PUSH_FAILURE
      ],
      headers: JSON_HEADERS
    }
  };
}

export const DEP_FETCH_REQUEST = NS.concat('DEP_FETCH_REQUEST');
export const DEP_FETCH_SUCCESS = NS.concat('DEP_FETCH_SUCCESS');
export const DEP_FETCH_FAILURE = NS.concat('DEP_FETCH_FAILURE');

export function depFetch () {
  return {
    [CALL_API]: {
      endpoint: `${ENDPOINT}/management/v1/devices/fetch`,
      method: 'POST',
      types: [
        DEP_FETCH_REQUEST,
        DEP_FETCH_SUCCESS,
        DEP_FETCH_FAILURE
      ],
      headers: JSON_HEADERS
    }
  };
}

export const ASSIGN_WORKFLOW_REQUEST = NS.concat('ASSIGN_WORKFLOW_REQUEST');
export const ASSIGN_WORKFLOW_SUCCESS = NS.concat('ASSIGN_WORKFLOW_SUCCESS');
export const ASSIGN_WORKFLOW_FAILURE = NS.concat('ASSIGN_WORKFLOW_FAILURE');

export function assignWorkflow (uuid, workflowUuid) {
  return {
    [CALL_API]: {
      endpoint: `${ENDPOINT}/management/v1/devices/${uuid}`,
      method: 'PATCH',
      types: [
        ASSIGN_WORKFLOW_REQUEST,
        ASSIGN_WORKFLOW_SUCCESS,
        ASSIGN_WORKFLOW_FAILURE
      ],
      headers: JSON_HEADERS,
      body: JSON.stringify({
        'workflow_uuid': workflowUuid
      })
    }
  };
}
