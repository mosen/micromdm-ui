'use strict';
import * as ui from '../../actions/ui/device';

const initialState = {
  items: [],
  expanded: false
};

export default function updates (state = initialState, action) {
  switch (action.type) {
    case ui.SET_UPDATE_LIST_EXPANDED:
      return {
        ...state,
        expanded: action.payload
      };
    default:
      return state;
  }
}
