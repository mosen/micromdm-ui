'use strict';
import React, {Component, PropTypes} from 'react';
import DeviceMenu from './DeviceMenu';

import './DevicePage.scss';

// Device View Page
class DevicePage extends Component {

  static propTypes = {
    params: PropTypes.shape({
      uuid: PropTypes.string.isRequired
    }),
    router: PropTypes.object
  };

  componentWillMount () {
    this.props.api.read(this.props.params.uuid);
  }

  render () {
    const {
      device,
      router
    } = this.props;

    return (
      <div className='Device'>
        <DeviceMenu {...this.props} />
        <div className='DeviceContent'>
        {this.props.children}
        </div>
      </div>
    );
  }

}

export default DevicePage;

