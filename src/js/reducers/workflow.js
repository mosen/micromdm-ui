'use strict';

import * as actions from '../actions/ui/workflow';
import * as apiActions from '../actions/api/workflows';

const initialState = {
  loading: false,
  error: false,
  errorDetails: false,
  uuid: null,
  name: '',
  profiles: [],
  applications: [],
  included_workflows: [],
  drawerOpen: false,
  drawerType: 'profiles',
  drawerItems: []
};

export default function workflow (state = initialState, action) {
  switch (action.type) {
    case actions.PICK_APPLICATIONS_VISIBLE:
      return Object.assign({}, state, {
        drawerOpen: true,
        drawerType: 'applications'
      });
    case actions.PICK_PROFILES_VISIBLE:
      return Object.assign({}, state, {
        drawerOpen: true,
        drawerType: 'profiles'
      });
    case actions.PICK_WORKFLOWS_VISIBLE:
      return Object.assign({}, state, {
        drawerOpen: true,
        drawerType: 'workflows'
      });
    case actions.DRAWER_VISIBLE:
      return Object.assign({}, state, {
        drawerOpen: action.payload
      });
    case actions.ADD_PROFILE:
      return Object.assign({}, state, {
        profiles: state.profiles.concat([action.payload])
      });
    case actions.REMOVE_PROFILE:
      const payloadIdentifier = action.payload;

      const profiles = state.profiles.filter((item) => {
        return item.payload_identifier !== payloadIdentifier;
      });

      return Object.assign({}, state, {
        profiles
      });
    case actions.CHANGE_NAME_INPUT:
      return Object.assign({}, state, {
        name: action.payload
      });

    case apiActions.CREATE_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case apiActions.CREATE_SUCCESS:
      return Object.assign({}, state, {
        uuid: action.payload.uuid
      });
    case apiActions.CREATE_FAILURE:
      return Object.assign({}, state, {
        error: true,
        errorDetails: action.payload
      });

    default:
      return state;
  }
}
