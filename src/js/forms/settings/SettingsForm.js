import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

export const fields = [
  'VoiceRoaming',
  'PersonalHotspot',
  'Wallpaper',
  'DataRoaming',
  'DeviceName',
  'MDMOptions',
  'MaximumResidentUsers'
];

const validate = (values) => {
  'use strict';
  const errors = {};

  return errors;
};