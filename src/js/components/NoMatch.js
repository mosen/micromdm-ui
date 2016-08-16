'use strict';
import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class LoginDialog extends Component {
  handleClose = () => {
    this.props.push('/');
  };

  render () {
    const {
      endpoint
    } = this.props;

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <Dialog
        onRequestClose={this.handleClose}
        title='Page not found'
        actions={actions}
        open
      >
        The page you tried to access was not found.
      </Dialog>
    );
  }
}

export default LoginDialog;
