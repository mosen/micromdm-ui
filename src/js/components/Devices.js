'use strict';
import React, {Component, PropTypes} from 'react';
import DeviceList from './DeviceList';

class Devices extends Component {

  static propTypes = {
    index: PropTypes.func.isRequired,
    devices: PropTypes.object.isRequired
  };

  componentWillMount () {
    this.props.index();
  }

  render () {
    const {
      devices
    } = this.props;

    return (
      <div className='Devices'>
        {!devices.error && <DeviceList loading={devices.loading} items={devices.items} />}
      </div>
    );
  }

}

export default Devices;
