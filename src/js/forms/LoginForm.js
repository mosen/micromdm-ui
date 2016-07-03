import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

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
    fields: PropTypes.shape({
      endpoint: PropTypes.string
    }).isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  handleSave (evt) {
    evt.preventDefault();

    const form = ReactDOM.findDOMNode(this);
    form.submit();
  }

  render () {
    const {
      fields: {
        endpoint
      },
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            hintText='MicroMDM URL'
            {...endpoint}
          />
        </div>
        <FlatButton label='Save' onClick={this.handleSave} />
      </form>
    );
  }
}

const LoginReduxForm = reduxForm({
  form: 'login',
  fields: ['endpoint'],
  validate
})(LoginForm);

export default LoginReduxForm;
