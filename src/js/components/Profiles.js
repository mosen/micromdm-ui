'use strict';
import React, {Component, PropTypes} from 'react';
import Upload from './Upload';

class Profiles extends Component {

  static propTypes = {
    index: PropTypes.func.isRequired
  };

  componentWillMount () {
    this.props.index();
  }

  handleChangeFiles (fileList) {
    console.dir(fileList);
  }

  render () {
    return (
      <div className='Profiles'>
        <Upload onChangeFiles={this.handleChangeFiles} />
      </div>
    );
  }

}

export default Profiles;
