'use strict';

import {CALL_API} from 'redux-api-middleware';
import {REDUX_NS, JSON_HEADERS} from '../constants';
import {endpoint, jwtHeaders} from '../util/login';

const NS = REDUX_NS.concat('devices/');

export const INDEX_REQUEST = NS.concat('INDEX_REQUEST');
export const INDEX_SUCCESS = NS.concat('INDEX_SUCCESS');
export const INDEX_FAILURE = NS.concat('INDEX_FAILURE');

export function index () {
  return {
    [CALL_API]: {
      endpoint: endpoint('/management/v1/devices'),
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

export const READ_REQUEST = NS.concat('READ_REQUEST');
export const READ_SUCCESS = NS.concat('READ_SUCCESS');
export const READ_FAILURE = NS.concat('READ_FAILURE');

export function read (uuid) {
  return {
    [CALL_API]: {
      endpoint: endpoint(`/management/v1/devices/${uuid}`),
      method: 'GET',
      types: [
        READ_REQUEST,
        READ_SUCCESS,
        READ_FAILURE
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
      endpoint: endpoint(`/management/v1/devices/${uuid}`),
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

export const PUSH_REQUEST = NS.concat('PUSH_REQUEST');
export const PUSH_SUCCESS = NS.concat('PUSH_SUCCESS');
export const PUSH_FAILURE = NS.concat('PUSH_FAILURE');

export function push (udid) {
  return {
    [CALL_API]: {
      endpoint: endpoint(`/management/v1/devices/${udid}/push`),
      method: 'POST',
      types: [
        PUSH_REQUEST,
        PUSH_SUCCESS,
        PUSH_FAILURE
      ],
      headers: jwtHeaders(JSON_HEADERS)
    }
  };
}

export const DEP_FETCH_REQUEST = NS.concat('DEP_FETCH_REQUEST');
export const DEP_FETCH_SUCCESS = NS.concat('DEP_FETCH_SUCCESS');
export const DEP_FETCH_FAILURE = NS.concat('DEP_FETCH_FAILURE');

export function depFetch () {
  return {
    [CALL_API]: {
      endpoint: endpoint('/management/v1/devices/fetch'),
      method: 'POST',
      types: [
        DEP_FETCH_REQUEST,
        DEP_FETCH_SUCCESS,
        DEP_FETCH_FAILURE
      ],
      headers: jwtHeaders(JSON_HEADERS)
    }
  };
}

export const ASSIGN_WORKFLOW_REQUEST = NS.concat('ASSIGN_WORKFLOW_REQUEST');
export const ASSIGN_WORKFLOW_SUCCESS = NS.concat('ASSIGN_WORKFLOW_SUCCESS');
export const ASSIGN_WORKFLOW_FAILURE = NS.concat('ASSIGN_WORKFLOW_FAILURE');

export function assignWorkflow (uuid, workflowUuid) {
  return {
    [CALL_API]: {
      endpoint: endpoint(`/management/v1/devices/${uuid}`),
      method: 'PATCH',
      types: [
        ASSIGN_WORKFLOW_REQUEST,
        ASSIGN_WORKFLOW_SUCCESS,
        ASSIGN_WORKFLOW_FAILURE
      ],
      headers: jwtHeaders(JSON_HEADERS),
      body: JSON.stringify({
        'workflow_uuid': workflowUuid
      })
    }
  };
}

export const APPS_INDEX_REQUEST = NS.concat('APPS_INDEX_REQUEST');
export const APPS_INDEX_SUCCESS = NS.concat('APPS_INDEX_SUCCESS');
export const APPS_INDEX_FAILURE = NS.concat('APPS_INDEX_FAILURE');

export function appsIndex (uuid) {
  return {
    [CALL_API]: {
      endpoint: endpoint(`/management/v1/devices/${uuid}/applications`),
      method: 'GET',
      types: [
        APPS_INDEX_REQUEST,
        APPS_INDEX_SUCCESS,
        APPS_INDEX_FAILURE
      ],
      headers: jwtHeaders(JSON_HEADERS)
    }
  };
}

export const CERTS_INDEX_REQUEST = NS.concat('CERTS_INDEX_REQUEST');
export const CERTS_INDEX_SUCCESS = NS.concat('CERTS_INDEX_SUCCESS');
export const CERTS_INDEX_FAILURE = NS.concat('CERTS_INDEX_FAILURE');

export function certsIndex (uuid) {
  return {
    [CALL_API]: {
      endpoint: endpoint(`/management/v1/devices/${uuid}/certificates`),
      method: 'GET',
      types: [
        CERTS_INDEX_REQUEST,
        CERTS_INDEX_SUCCESS,
        CERTS_INDEX_FAILURE
      ],
      headers: jwtHeaders(JSON_HEADERS)
    }
  };
}
