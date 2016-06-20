'use strict';

import {REDUX_NS} from '../constants';
const NS = REDUX_NS.concat('workflow/');

export const DRAWER_VISIBLE = NS.concat('DRAWER_VISIBLE');

export function drawerVisible (visible = true) {
  return {
    type: DRAWER_VISIBLE,
    payload: visible
  };
}

export const PICK_PROFILES_VISIBLE = NS.concat('PICK_PROFILES_VISIBLE');

export function pickProfilesVisible (visible = true) {
  return {
    type: PICK_PROFILES_VISIBLE,
    payload: visible
  };
}

export const PICK_APPLICATIONS_VISIBLE = NS.concat('PICK_APPLICATIONS_VISIBLE');

export function pickApplicationsVisible (visible = true) {
  return {
    type: PICK_APPLICATIONS_VISIBLE,
    payload: visible
  };
}

export const PICK_WORKFLOWS_VISIBLE = NS.concat('PICK_WORKFLOWS_VISIBLE');

export function pickWorkflowsVisible (visible = true) {
  return {
    type: PICK_WORKFLOWS_VISIBLE,
    payload: visible
  };
}

export const ADD_PROFILE = NS.concat('ADD_PROFILE');

export function addProfile (profile) {
  return {
    type: ADD_PROFILE,
    payload: profile
  };
}

export const REMOVE_PROFILE = NS.concat('REMOVE_PROFILE');

export function removeProfile (payloadIdentifier) {
  return {
    type: REMOVE_PROFILE,
    payload: payloadIdentifier
  };
}

export const ADD_APPLICATION = NS.concat('ADD_APPLICATION');

export function addApplication (app) {
  return {
    type: ADD_APPLICATION,
    payload: app
  };
}

export const REMOVE_APPLICATION = NS.concat('REMOVE_APPLICATION');

export function removeApplication (app) {
  return {
    type: REMOVE_APPLICATION,
    payload: app
  };
}

export const ADD_WORKFLOW = NS.concat('ADD_WORKFLOW');

export function addWorkflow (workflow) {
  return {
    type: ADD_WORKFLOW,
    payload: workflow
  };
}

export const REMOVE_WORKFLOW = NS.concat('REMOVE_WORKFLOW');

export function removeWorkflow (workflow) {
  return {
    type: REMOVE_WORKFLOW,
    payload: workflow
  };
}

export const CHANGE_NAME_INPUT = NS.concat('CHANGE_NAME_INPUT');

export function changeNameInput (value) {
  return {
    type: CHANGE_NAME_INPUT,
    payload: value
  };
}
