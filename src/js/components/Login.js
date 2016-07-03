'use strict';
import React, {Component, PropTypes} from 'react';
import LoginForm from '../forms/LoginForm';
import Dialog from 'material-ui/Dialog';

import './Login.scss';

class Login extends Component {

  static propTypes = {
    open: PropTypes.bool.isRequired
  };

  handleClose = () => {

  };

  handleSubmit = (values) => {

  };

  render () {
    return (
      <Dialog
        onRequestClose={this.handleClose}
        title='MicroMDM'
        contentClassName='Login'
        open
      >
        <LoginForm onSubmit={this.handleSubmit} />
      </Dialog>
    );
  }
}

export default Login;
