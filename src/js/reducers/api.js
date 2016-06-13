'use strict';

const initialState = {
  endpoint: 'http://localhost:6443/'
};

export default function api (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
