'use strict';
import React, {Component, PropTypes} from 'react';

class Workflows extends Component {

  static propTypes = {
    index: PropTypes.func.isRequired
  };

  componentWillMount () {
    this.props.index();
  }

  render () {
    return (
      <div className='Workflows'>
        Workflows
      </div>
    );
  }

}

export default Workflows;
