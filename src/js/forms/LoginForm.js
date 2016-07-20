import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import {
  TextField
} from 'redux-form-material-ui';

const validate = (values) => {
  'use strict';
  const errors = {};

  if (!values.endpoint) {
    errors.endpoint = 'Required';
  }

  return errors;
};

class LoginForm extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  render () {
    const {
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name='endpoint' component={TextField} hintText='https://localhost:8443/' />
          <FlatButton label='OK' type='submit' />
        </div>
      </form>
    );
  }
}

const LoginReduxForm = reduxForm({
  form: 'login',
  validate
})(LoginForm);

export default LoginReduxForm;
