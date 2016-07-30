'use strict';

// Add Json web token headers to an existing set of headers
export function jwtHeaders (headers = {}) {
  return (state) => {
    if (state.login.jwt_token) {
      return {
        ...headers,
        "Authorization": `Bearer ${state.login.jwt_token}`
      }
    } else {
      return headers
    }
  };
}

// Dynamically determine our api endpoint from the state, given a suffix.
export function endpoint (suffix = '') {
  return (state) => {
    if (state.login.endpoint) {
      return `${state.login.endpoint}${suffix}`;
    } else {
      return suffix;
    }
  }
}

