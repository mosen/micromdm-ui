import {createStore, applyMiddleware, compose} from 'redux';
import createDebounce from 'redux-debounce';
import thunk from 'redux-thunk';
import {apiMiddleware} from 'redux-api-middleware';
import timeoutScheduler from '../middleware/timeout';
import persistState from 'redux-localstorage';

import rootReducer from '../reducers';

const debouncer = createDebounce({ simple: 300 });

export default function configureStore (initialState, ...middlewares) {
  const enhancer = compose(
    applyMiddleware(
      debouncer,
      timeoutScheduler,
      thunk,
      apiMiddleware,
      ...middlewares
    ),
    persistState('connection', { key: 'micromdm' })
  );

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  return store;
}
