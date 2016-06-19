'use strict';

import * as actions from '../actions/ui/workflow';

const initialState = {
  loading: false,
  error: false,
  errorDetails: false,
  uuid: null,
  profiles: [],
  applications: [],
  includes: []
};

export default function workflow (state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
