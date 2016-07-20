import {createStore, applyMiddleware, compose} from 'redux';
import createDebounce from 'redux-debounce';
import thunk from 'redux-thunk';
import {apiMiddleware} from 'redux-api-middleware';
import timeoutScheduler from '../middleware/timeout';
import persistState from 'redux-localstorage';
import {routerMiddleware} from 'react-router-redux';

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
    persistState('connection', { key: 'micromdm' }),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  );

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
