'use strict';
import React, {Component, PropTypes} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

class WorkflowsToolbar extends Component {

  static propTypes = {
    selection: PropTypes.array.isRequired,
    onDeleteAction: PropTypes.func.isRequired,
    onAddAction: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.handleTouchTapSelectionDelete = this.handleTouchTapSelectionDelete.bind(this);
    this.handleTouchTapAdd = this.handleTouchTapAdd.bind(this);
  }

  handleTouchTapSelectionDelete (evt) {
    evt.preventDefault();
    this.props.onDeleteAction(evt);
  }

  handleTouchTapAdd (evt) {
    this.props.onAddAction(evt);
  }

  render () {
    const {
      selection
    } = this.props;

    const isItemsSelected = selection.length > 0;

    return (
      <Toolbar>
        <ToolbarGroup firstChild>
          <FlatButton label='Delete' secondary disabled={!isItemsSelected} onTouchTap={this.handleTouchTapSelectionDelete} />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton label='Add' primary onTouchTap={this.handleTouchTapAdd} />
        </ToolbarGroup>
      </Toolbar>
    );
  }

}

export default WorkflowsToolbar;
