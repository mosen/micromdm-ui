'use strict';

import React, {Component, PropTypes} from 'react';
import { eraseDevice } from '../actions/util/command';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import MoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import ProductIcon from './ProductIcon';

class DeviceMainDetail extends Component {

  static propTypes = {
    certificates: PropTypes.array,
    lastUpdated: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    attributes: PropTypes.shape({
      uuid: PropTypes.string
    })
  };

  static defaultProps = {
    lastUpdated: '...'
  };

  handleErase = () => {
    this.props.commandsApi.create(eraseDevice(this.props.attributes.udid, "123456"));
  };

  render () {
    const {
      loading,
      attributes
    } = this.props;

    const title = loading ? 'Loading...' : attributes.device_name;
    const subtitle = loading ? 'Loading...' : attributes.serial_number;
    const avatar = loading ? <Avatar icon={<MoreHoriz />}/> : <Avatar icon={<ProductIcon name={attributes.product_name} />}/>;

    return (
      <Card>
        <CardHeader
          title={title}
          subtitle={subtitle}
          avatar={avatar}
        />
        <CardText>
          {attributes &&
            <dl>
              <dt>UUID</dt>
              <dd>{attributes.uuid}</dd>

              <dt>UDID</dt>
              <dd>{attributes.udid}</dd>

              <dt>Serial number</dt>
              <dd>{attributes.serial_number}</dd>

              <dt>OS Version</dt>
              <dd>{attributes.os_version}</dd>

              <dt>Product name</dt>
              <dd>{attributes.product_name}</dd>

              <dt>Model</dt>
              <dd>{attributes.model}</dd>

              <dt>Last check in</dt>
              <dd>{attributes.last_checkin}</dd>

              <dt>Device name</dt>
              <dd>{attributes.device_name}</dd>
            </dl>
          }
        </CardText>
        <CardActions>
          <FlatButton label='Erase' onTouchTap={this.handleErase} />
        </CardActions>
      </Card>
    );
  }

}

export default DeviceMainDetail;