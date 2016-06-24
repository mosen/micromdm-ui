'use strict';
import React, {Component, PropTypes} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AutoRenew from 'material-ui/svg-icons/action/autorenew';
import CloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';

class DevicesToolbar extends Component {

  static propTypes = {
    onActionMenuTouchTap: PropTypes.func.isRequired,
    onActionMenuClose: PropTypes.func.isRequired,
    onPushAction: PropTypes.func.isRequired,
    onQueryAction: PropTypes.func.isRequired,
    onDeleteAction: PropTypes.func.isRequired,
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
    this.handleTouchTapSelectionDelete = this.handleTouchTapSelectionDelete.bind(this);
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

  handleTouchTapSelectionDelete (evt) {
    evt.preventDefault();
    this.props.onDeleteAction(evt);
  }

  render () {
    const {
      selection,
      selectionMenuVisible
    } = this.props;

    const isItemsSelected = selection.length > 0;
    const selectionText = `${selection.length} Selected Item(s)`;

    return (
      <Toolbar>
        <ToolbarGroup firstChild>
          <FlatButton label='Delete' secondary disabled={!isItemsSelected} onTouchTap={this.handleTouchTapSelectionDelete} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text={selectionText} />
          <RaisedButton
            disabled={!isItemsSelected}
            onTouchTap={this.handleTouchTapSelectionMenu}
            label='Action'
            icon={<CheckBox />}
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
              <MenuItem primaryText='Query All information' />
              <Divider />
              <MenuItem primaryText='Start AirPlay Mirroring' />
              <MenuItem primaryText='Stop AirPlay Mirroring' />
            </Menu>
          </Popover>
        </ToolbarGroup>
      </Toolbar>
    );
  }

}

export default DevicesToolbar;
