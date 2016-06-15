'use strict';

import * as actions from '../actions/ui/uploads';

const initialState = {
  files: []
};

export default function uploads (state = initialState, action) {
  switch (action.type) {
    case actions.SELECT_FILES:

    default:
      return state;
  }
}
