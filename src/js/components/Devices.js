'use strict';
import React, {Component, PropTypes} from 'react';

class Devices extends Component {

  static propTypes = {
    index: PropTypes.func.isRequired,
    children: PropTypes.object
  };

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

export default Devices;
