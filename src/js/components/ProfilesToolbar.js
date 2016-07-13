'use strict';
import React, {Component, PropTypes} from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

class ProfilesToolbar extends Component {

  static propTypes = {
    onDeleteAction: PropTypes.func.isRequired,
    selection: PropTypes.array.isRequired
  };

  constructor (props) {
    super(props);

    this.handleTouchTapSelectionDelete = this.handleTouchTapSelectionDelete.bind(this);
  }

  handleTouchTapSelectionDelete (evt) {
    evt.preventDefault();
    this.props.onDeleteAction(evt);
  }

  render () {
    const {
      selection
    } = this.props;

    const isItemsSelected = selection.length > 0;

    return (
      <Toolbar>
        <ToolbarGroup>
          <FlatButton label='Delete' secondary disabled={!isItemsSelected} onTouchTap={this.handleTouchTapSelectionDelete} />
        </ToolbarGroup>
      </Toolbar>
    );
  }

}

export default ProfilesToolbar;
