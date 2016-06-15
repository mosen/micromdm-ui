'use strict';
import React, {Component, PropTypes} from 'react';
import Upload from '../containers/Upload';
import ProfileList from './ProfileList';

class Profiles extends Component {

  static propTypes = {
    index: PropTypes.func.isRequired,
    upload: PropTypes.func.isRequired,

    profiles: PropTypes.object.isRequired
  };

  componentWillMount () {
    this.props.index();
  }

  handleChangeFiles (fileList) {
    console.dir(fileList);
  }

  render () {
    const {
      upload,
      profiles
    } = this.props;

    return (
      <div className='Profiles'>
        <Upload id='ProfilesUpload' onChangeFiles={this.handleChangeFiles} upload={upload} />
        <ProfileList items={profiles.items} loading={profiles.loading} />
      </div>
    );
  }

}

export default Profiles;
