'use strict';
import React, {Component, PropTypes} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AutoRenew from 'material-ui/svg-icons/action/autorenew';
import CloudUpload from 'material-ui/svg-icons/file/cloud-upload';

class DevicesToolbar extends Component {

  static propTypes = {
    onActionMenuTouchTap: PropTypes.func.isRequired,
    onActionMenuClose: PropTypes.func.isRequired,
    onPushAction: PropTypes.func.isRequired,
    onQueryAction: PropTypes.func.isRequired,
    selection: PropTypes.array.isRequired,
    selectionMenuVisible: PropTypes.bool
  };

  constructor (props) {
    super(props);

    this.state = {
      anchorEl: null
    };

    this.handleTouchTapSelectionMenu = this.handleTouchTapSelectionMenu.bind(this);
    this.handleTouchTapSelectionPush = this.handleTouchTapSelectionPush.bind(this);
    this.handleSelectionMenuClose = this.handleSelectionMenuClose.bind(this);
    this.handleTouchTapQueryMenuItem = this.handleTouchTapQueryMenuItem.bind(this);
  }

  handleTouchTapSelectionMenu (evt) {
    evt.preventDefault();

    this.props.onActionMenuTouchTap(true, evt.currentTarget);
    this.setState({ // For some reason you cannot pass the element through redux state tree
      anchorEl: evt.currentTarget
    });
  }

  handleTouchTapSelectionPush (evt) {
    evt.preventDefault();
    this.props.onPushAction();
  }

  handleSelectionMenuClose () {
    this.props.onActionMenuClose();
  }

  handleTouchTapQueryMenuItem (evt) {
    evt.preventDefault();
    this.props.onQueryAction(evt);
  }

  render () {
    const {
      selection,
      selectionMenuVisible
    } = this.props;

    const canDelete = selection.length > 0;
    const selectionText = `${selection.length} Selected Item(s)`;

    return (
      <Toolbar>
        <ToolbarGroup firstChild>
          <FlatButton label='Delete' secondary disabled={!canDelete} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text={selectionText} />
          <RaisedButton
            onTouchTap={this.handleTouchTapSelectionMenu}
            label='Query'
            icon={<AutoRenew />}
          />
          <RaisedButton
            onTouchTap={this.handleTouchTapSelectionPush}
            label='Push'
            icon={<CloudUpload />}
          />
          <Popover
            open={selectionMenuVisible}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleSelectionMenuClose}
          >
            <Menu onItemTouchTap={this.handleTouchTapQueryMenuItem}>
              <MenuItem primaryText='All information' />
              <MenuItem primaryText='Capacity available' />
              <MenuItem primaryText='Total capacity' />
              <MenuItem primaryText='Hostname' />
              <MenuItem primaryText='Local hostname' />
              <MenuItem primaryText='Model' />
              <MenuItem primaryText='Model name' />
              <MenuItem primaryText='Operating system version' />
              <MenuItem primaryText='Product name' />
              <MenuItem primaryText='Serial number' />
            </Menu>
          </Popover>
        </ToolbarGroup>
      </Toolbar>
    );
  }

}

export default DevicesToolbar;
