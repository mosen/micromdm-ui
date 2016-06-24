// This middleware dispatches an action with a given delay in milliseconds.

const timeoutScheduler = (store) => (next) => (action) => {
  'use strict';

  if (!action.meta || !action.meta.delay) {
    return next(action);
  }

  let timeoutId = setTimeout(
    () => next(action),
    action.meta.delay
  );

  return function cancel () {
    clearTimeout(timeoutId);
  };
};

export default timeoutScheduler;
