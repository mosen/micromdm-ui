'use strict';
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default function Loading ({ message }) {
  'use strict';
  return (
    <div className='inline-center'>
      <h2>{message}</h2>
      <CircularProgress style={{margin: 0}}/>
    </div>
  );
}
