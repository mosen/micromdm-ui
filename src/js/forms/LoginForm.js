import React, {Component, PropTypes} from 'react';
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
    onSubmit: PropTypes.func.isRequired
  };

  onChangeEndpoint = (evt) => {
    this.setState({ endpoint: evt.currentTarget.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const values = this.state;
    this.props.onSubmit(values);
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            onChange={this.onChangeEndpoint}
            hintText='https://localhost:8443/'
          />
          <FlatButton label='Connect' onClick={this.handleSubmit} />
        </div>
      </form>
    );
  }
}

export default LoginForm;
