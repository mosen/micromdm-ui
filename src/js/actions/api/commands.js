'use strict';

import {CALL_API} from 'redux-api-middleware';
import {REDUX_NS, JSON_HEADERS} from '../constants';
import {ENDPOINT} from '../../config';

const NS = REDUX_NS.concat('commands/');

export const CREATE_REQUEST = NS.concat('CREATE_REQUEST');
export const CREATE_SUCCESS = NS.concat('CREATE_SUCCESS');
export const CREATE_FAILURE = NS.concat('CREATE_FAILURE');

export function create (data) {
  return {
    [CALL_API]: {
      endpoint: `${ENDPOINT}/mdm/commands`,
      method: 'POST',
      types: [
        {
          type: CREATE_REQUEST,
          payload: (action, state) => (data)
        },
        CREATE_SUCCESS,
        CREATE_FAILURE
      ],
      headers: JSON_HEADERS,
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
      endpoint: `/mdm/commands/${udid}/next`,
      method: 'GET',
      types: [
        NEXTCMD_REQUEST,
        NEXTCMD_SUCCESS,
        NEXTCMD_FAILURE
      ],
      headers: JSON_HEADERS
    }
  };
}

export const DESTROY_REQUEST = NS.concat('DESTROY_REQUEST');
export const DESTROY_SUCCESS = NS.concat('DESTROY_SUCCESS');
export const DESTROY_FAILURE = NS.concat('DESTROY_FAILURE');

export function destroy (udid, commandUuid) {
  return {
    [CALL_API]: {
      endpoint: `/mdm/commands/${udid}/${commandUuid}`,
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
