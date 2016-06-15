'use strict';
import React, {Component, PropTypes} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Upload from '../containers/Upload';
import ProfileList from './ProfileList';

class Profiles extends Component {

  static propTypes = {
    api: PropTypes.shape({
      index: PropTypes.func.isRequired,
      upload: PropTypes.func.isRequired
    }),
    ui: PropTypes.shape({
      changeSelection: PropTypes.func.isRequired
    }),
    profiles: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);

    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }

  componentWillMount () {
    this.props.api.index();
  }

  handleChangeFiles (fileList) {
    console.dir(fileList);
  }

  handleSelectionChange (selection) {
    this.props.ui.changeSelection(selection);
  }

  render () {
    const {
      api: {
        upload
      },
      profiles
    } = this.props;

    const canDelete = profiles.selection.length > 0;

    return (
      <div className='Profiles'>
        <Upload id='ProfilesUpload' onChangeFiles={this.handleChangeFiles} upload={upload} />
        <Toolbar>
          <ToolbarGroup firstChild>
            <FlatButton label='Delete' secondary disabled={!canDelete} />
          </ToolbarGroup>
        </Toolbar>
        <ProfileList
          items={profiles.items}
          loading={profiles.loading}
          selection={profiles.selection}
          onSelectionChange={this.handleSelectionChange}
        />
      </div>
    );
  }

}

export default Profiles;
