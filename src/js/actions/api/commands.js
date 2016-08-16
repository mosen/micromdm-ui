'use strict';

import {CALL_API} from 'redux-api-middleware';
import {REDUX_NS, JSON_HEADERS} from '../constants';
import {endpoint, jwtHeaders} from '../util/login';

const NS = REDUX_NS.concat('commands/');

export const INDEX_REQUEST = NS.concat('INDEX_REQUEST');
export const INDEX_SUCCESS = NS.concat('INDEX_SUCCESS');
export const INDEX_FAILURE = NS.concat('INDEX_FAILURE');

export function index (udid) {
  return {
    [CALL_API]: {
      endpoint: endpoint(`/mdm/commands/${udid}`),
      method: 'GET',
      types: [
        {
          type: INDEX_REQUEST,
          payload: (action, state) => ({ udid })
        },
        {
          type: INDEX_SUCCESS,
          meta: (action, state, res) => {
            return { udid: udid };
          }
        },
        INDEX_FAILURE
      ],
      headers: jwtHeaders(JSON_HEADERS)
    }
  };
}

export const CREATE_REQUEST = NS.concat('CREATE_REQUEST');
export const CREATE_SUCCESS = NS.concat('CREATE_SUCCESS');
export const CREATE_FAILURE = NS.concat('CREATE_FAILURE');

export function create (data) {
  return {
    [CALL_API]: {
      endpoint: endpoint('/mdm/commands'),
      method: 'POST',
      types: [
        {
          type: CREATE_REQUEST,
          payload: (action, state) => (data)
        },
        CREATE_SUCCESS,
        CREATE_FAILURE
      ],
      headers: jwtHeaders(JSON_HEADERS),
      body: JSON.stringify(data)
    }
  };
}

export const NEXTCMD_REQUEST = NS.concat('NEXTCMD_REQUEST');
export const NEXTCMD_SUCCESS = NS.concat('NEXTCMD_SUCCESS');
export const NEXTCMD_FAILURE = NS.concat('NEXTCMD_FAILURE');

export function nextCmd (udid) {
  return {
    [CALL_API]: {
      endpoint: endpoint(`/mdm/commands/${udid}/next`),
      method: 'GET',
      types: [
        NEXTCMD_REQUEST,
        NEXTCMD_SUCCESS,
        NEXTCMD_FAILURE
      ],
      headers: jwtHeaders(JSON_HEADERS)
    }
  };
}

export const DESTROY_REQUEST = NS.concat('DESTROY_REQUEST');
export const DESTROY_SUCCESS = NS.concat('DESTROY_SUCCESS');
export const DESTROY_FAILURE = NS.concat('DESTROY_FAILURE');

export function destroy (udid, commandUuid) {
  return {
    [CALL_API]: {
      endpoint: endpoint(`/mdm/commands/${udid}/${commandUuid}`),
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
