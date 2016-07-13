import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

export const fields = [
  'deviceId'
];

const validate = (values) => {
  'use strict';
  const errors = {};

  return errors;
};

class AirplayWhitelistForm extends Component {

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
        deviceId
      },
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Device ID</label>
          <input type='text' {...deviceId} />
        </div>
        <div>
          <button type='submit' value='Save' />
        </div>
      </form>
    );
  }
}

const AirplayWhitelistReduxForm = reduxForm({
  form: 'payload_airplay_whitelist',
  fields,
  validate
})(AirplayWhitelistForm);

export default AirplayWhitelistReduxForm;
