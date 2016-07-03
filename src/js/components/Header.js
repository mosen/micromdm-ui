import React from 'react';
import IconButton from 'material-ui/IconButton';
import Power from 'material-ui/svg-icons/notification/power';

export default function Header ({ onClickConnection }) {
  'use strict';
  return (
    <div className='Header'>
      <ul className='HeaderLeft'>
        <li></li>
        <li><h4>MicroMDM</h4></li>
      </ul>
      <ul className='HeaderRight'>
        <li>
          <IconButton
            tooltip='Connection Settings'
            tooltipPosition='bottom-left'
            on
            onClick={onClickConnection}
          >
            <Power />
          </IconButton>
        </li>
      </ul>
    </div>
  );
}
