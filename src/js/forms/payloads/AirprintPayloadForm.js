import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

export const fields = [

];

const validate = (values) => {
  'use strict';
  const errors = {};

  return errors;
};

class AirprintPayloadForm extends Component {

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

const AirprintPayloadReduxForm = reduxForm({
  form: 'payload_airprint',
  fields,
  validate
})(AirprintPayloadForm);

export default AirprintPayloadReduxForm;
