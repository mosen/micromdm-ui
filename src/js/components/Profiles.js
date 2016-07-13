'use strict';
import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Upload from '../containers/Upload';
import ProfilesToolbar from './ProfilesToolbar';
import ProfileList from './ProfileList';

class Profiles extends Component {

  static propTypes = {
    api: PropTypes.shape({
      index: PropTypes.func.isRequired,
      upload: PropTypes.func.isRequired,
      destroy: PropTypes.func.isRequired
    }),
    ui: PropTypes.shape({
      changeSelection: PropTypes.func.isRequired
    }),
    profiles: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);

    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
  }

  componentWillMount () {
    this.props.api.index();
  }

  getSelectedProfiles () {
    const {
      profiles: {
        items,
        selection
      }
    } = this.props;

    return items.filter(function (profile) {
      return selection.indexOf(profile.profile_uuid) !== -1;
    });
  }

  handleChangeFiles (fileList) {
    console.dir(fileList);
  }

  handleSelectionChange (selection) {
    this.props.ui.changeSelection(selection);
  }

  handleDeleteAction () {
    const profiles = this.getSelectedProfiles();

    profiles.forEach((profile) => {
      this.props.api.destroy(profile.profile_uuid);
    });
  }

  render () {
    const {
      api: {
        upload
      },
      profiles: {
        loading,
        items,
        selection
      }
    } = this.props;

    return (
      <div className='Profiles'>
        <Upload id='ProfilesUpload' onChangeFiles={this.handleChangeFiles} upload={upload} />
        <ProfilesToolbar onDeleteAction={this.handleDeleteAction} selection={selection} />
        <ProfileList
          items={items}
          loading={loading}
          selection={selection}
          onSelectionChange={this.handleSelectionChange}
        />
      </div>
    );
  }

}

export default Profiles;
