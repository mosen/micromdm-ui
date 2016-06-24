import {createStore, applyMiddleware, compose} from 'redux';
import createDebounce from 'redux-debounce';
import thunk from 'redux-thunk';
import {apiMiddleware} from 'redux-api-middleware';
import timeoutScheduler from '../middleware/timeout';

import rootReducer from '../reducers';

const debouncer = createDebounce({ simple: 300 });

export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        debouncer,
        timeoutScheduler,
        thunk,
        apiMiddleware
      )
    )
  );
}
