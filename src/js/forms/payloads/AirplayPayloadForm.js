import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

export const fields = [
  'whitelist',
  'passwords'
];

const validate = (values) => {
  'use strict';
  const errors = {};

  return errors;
};

class AirplayPayloadForm extends Component {

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
        whitelist,
        passwords
      },
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>

        <div>
          <input type='submit' value='Save' />
        </div>
      </form>
    );
  }
}

const AirplayPayloadReduxForm = reduxForm({
  form: 'payload_airplay',
  fields,
  validate
})(AirplayPayloadForm);

export default AirplayPayloadReduxForm;
