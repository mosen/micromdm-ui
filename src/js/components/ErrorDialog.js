import React, {Component, PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ErrorDialog extends Component {

  static propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    actions: PropTypes.array // Optional array of action buttons to add to the error dialog.
  };

  static defaultProps = {
    actions: [],
    message: ''
  };

  constructor (props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose (evt) {
    this.props.onClose();
  }

  render () {
    const {
      open,
      title,
      message,
      actions
    } = this.props;

    const okAction = [
      <FlatButton
        label='OK'
        primary
        keyboardFocused
        onTouchTap={this.handleClose}
        />
    ];

    const errorActions = okAction.concat(actions);

    return (
      <Dialog
        title={title}
        open={open}
        actions={errorActions}
      >
        {message}
      </Dialog>
    );
  }
}

export default ErrorDialog;
