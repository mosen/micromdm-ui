'use strict';
import * as ui from '../../actions/ui/device';

const initialState = {
  items: [],
  expanded: false
};

export default function profiles (state = initialState, action) {
  switch (action.type) {
    case ui.SET_PROFILE_LIST_EXPANDED:
      return {
        ...state,
        expanded: action.payload
      };
    default:
      return state;
  }
}
