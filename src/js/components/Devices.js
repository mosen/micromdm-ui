'use strict';
import React, {Component, PropTypes} from 'react';

const propTypes = {
  index: PropTypes.func.isRequired,
  children: PropTypes.object
};

class Devices extends Component {

  componentWillMount () {
    this.props.index();
  }

  render () {
    return (
      <div className='Devices'>
        Devices
      </div>
    );
  }

}

Devices.propTypes = propTypes;

export default Devices;
