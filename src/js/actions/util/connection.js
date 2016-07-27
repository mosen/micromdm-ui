'use strict';

export function jwtHeaders (headers = {}) {
  return (state) => {
    if (state.connection.jwt_token) {
      return {
        ...headers,
        "Authorization": `Bearer ${state.connection.jwt_token}`
      }
    } else {
      return headers
    }
  };
}

export function endpoint (suffix = '') {
  return (state) => {
    if (state.connection.endpoint) {
      return `${state.connection.endpoint}${suffix}`;
    } else {
      return suffix;
    }
  }
}

