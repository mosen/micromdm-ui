'use strict';
import React, {Component, PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {browserHistory} from 'react-router';

// Device View Page
class Device extends Component {

  static propTypes = {
    api: PropTypes.shape({
      read: PropTypes.func.isRequired
    })
  };

  componentWillMount () {
    this.props.api.read(this.props.params.uuid);
  }

  handleClickBack (evt) {
    browserHistory.push('/devices');
  }

  render () {
    const {
      device_name,
      serial_number,
      udid
    } = this.props;

    return (
      <Card>
        <CardHeader
          title={device_name}
          subtitle={serial_number}
          />
        <CardText>
          Device Detail
        </CardText>
        <CardActions>
          <FlatButton label='Back' onClick={this.handleClickBack} />
        </CardActions>
      </Card>
    );
  }

}

export default Device;
