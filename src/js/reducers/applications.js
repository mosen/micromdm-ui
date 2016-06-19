'use strict';

import * as actions from '../actions/api/applications';

const initialState = {
  items: [],
  loading: false,
  error: false,
  errorDetails: null,
  selection: []
};

export default function applications (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
