import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {apiMiddleware} from 'redux-api-middleware';

import rootReducer from '../reducers';

export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        apiMiddleware
      )
    )
  );
}
