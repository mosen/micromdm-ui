'use strict';
import React, {Component, PropTypes} from 'react';
import LoginForm from '../forms/LoginForm';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class LoginDialog extends Component {

  static propTypes = {
    endpoint: PropTypes.string,
    setEndpoint: PropTypes.func.isRequired
  };

  handleClose = () => {
    this.props.push('/');
  };

  handleSubmit = (values) => {
    this.props.setEndpoint(values.endpoint);
    this.handleClose();
  };

  submitForm = () => {
    this._frm.submit();
  };

  render () {
    const {
      endpoint
    } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Connect"
        primary={true}
        onTouchTap={this.submitForm}
      />
    ];

    const initialValues = {
      endpoint
    };

    return (
      <Dialog
        onRequestClose={this.handleClose}
        title='MicroMDM'
        contentClassName='Login'
        actions={actions}
        open
      >
        <LoginForm
          ref={(f) => this._frm = f}
          onSubmit={this.handleSubmit}
          initialValues={initialValues}
        />
      </Dialog>
    );
  }
}

export default LoginDialog;
