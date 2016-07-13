import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

export const fields = [
  'deviceName',
  'deviceId',
  'password'
];

const validate = (values) => {
  'use strict';
  const errors = {};


  return errors;
};

class AirplayPasswordForm extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render () {
    const {
      fields: {
        deviceName,
        deviceId,
        password
      },
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Device Name</label>
          <input type='text' {...deviceName} />
        </div>
        <div>
          <label>Device ID</label>
          <input type='text' {...deviceId} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' {...password} />
        </div>
        <div>
          <button type='submit' value='Save' />
        </div>
      </form>
    );
  }
}

const AirplayPasswordReduxForm = reduxForm({
  form: 'payload_airplay_password',
  fields,
  validate
})(AirplayPasswordForm);

export default AirplayPasswordReduxForm;
