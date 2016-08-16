'use strict';

import {REDUX_NS} from '../constants';
const NS = REDUX_NS.concat('ui/device/');

export const SET_COMMAND_LIST_EXPANDED = NS.concat('SET_COMMAND_LIST_EXPANDED');

export function setCommandListExpanded (isExpanded = true) {
  return {
    type: SET_COMMAND_LIST_EXPANDED,
    payload: isExpanded
  };
}

export const SET_CERT_LIST_EXPANDED = NS.concat('SET_CERT_LIST_EXPANDED');

export function setCertListExpanded (isExpanded = true) {
  return {
    type: SET_CERT_LIST_EXPANDED,
    payload: isExpanded
  };
}

export const SET_PROFILE_LIST_EXPANDED = NS.concat('SET_PROFILE_LIST_EXPANDED');

export function setProfileListExpanded (isExpanded = true) {
  return {
    type: SET_PROFILE_LIST_EXPANDED,
    payload: isExpanded
  };
}

export const SET_UPDATE_LIST_EXPANDED = NS.concat('SET_UPDATE_LIST_EXPANDED');

export function setUpdateListExpanded (isExpanded = true) {
  return {
    type: SET_UPDATE_LIST_EXPANDED,
    payload: isExpanded
  };
}
