'use strict';
import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';

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
        <RaisedButton label='Add' primary icon={<Add />} />
      </div>
    );
  }

}

export default Workflows;
