'use strict';
import React, {Component, PropTypes} from 'react';

class Profiles extends Component {

  static propTypes = {
    index: PropTypes.func.isRequired
  };

  componentWillMount () {
    this.props.index();
  }

  render () {
    return (
      <div className='Profiles'>
        Profiles
      </div>
    );
  }

}

export default Profiles;
