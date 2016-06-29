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
import CloudDownload from 'material-ui/svg-icons/file/cloud-download';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import * as MDM from '../constants/mdm';

class DevicesToolbar extends Component {

  static propTypes = {
    onActionMenuTouchTap: PropTypes.func.isRequired,
    onActionMenuClose: PropTypes.func.isRequired,
    onPushAction: PropTypes.func.isRequired,
    onQueryAction: PropTypes.func.isRequired,
    onDeleteAction: PropTypes.func.isRequired,
    onFetchDEPAction: PropTypes.func.isRequired,
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
    this.handleTouchTapFetchDEP = this.handleTouchTapFetchDEP.bind(this);
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

  handleTouchTapQueryMenuItem (evt, menuItem, index) {
    evt.preventDefault();
    const commandType = menuItem.props.value;

    this.props.onQueryAction(commandType);
  }

  handleTouchTapSelectionDelete (evt) {
    evt.preventDefault();
    this.props.onDeleteAction(evt);
  }

  handleTouchTapFetchDEP (evt) {
    evt.preventDefault();
    this.props.onFetchDEPAction(evt);
  }

  render () {
    const {
      selection,
      selectionMenuVisible
    } = this.props;

    const isItemsSelected = selection.length > 0;

    return (
      <Toolbar>
        <ToolbarGroup firstChild>
          <FlatButton label='Delete' secondary disabled={!isItemsSelected} onTouchTap={this.handleTouchTapSelectionDelete} />
          <RaisedButton
            onTouchTap={this.handleTouchTapFetchDEP}
            label='Fetch DEP'
            icon={<CloudDownload />}
          />
        </ToolbarGroup>
        <ToolbarGroup>
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
              <MenuItem primaryText='Query All information' value={MDM.DEVICE_INFO} />
              <Divider />
              <MenuItem primaryText='List Profiles' value={MDM.PROFILE_LIST} />
              <MenuItem primaryText='Security Info' value={MDM.SECURITY_INFO} />
              <MenuItem primaryText='List Certificates' value={MDM.CERTIFICATE_LIST} />
              <MenuItem primaryText='OS Update Status' value={MDM.OS_UPDATE_STATUS} />
              <MenuItem primaryText='Available Updates' value={MDM.AVAILABLE_OS_UPDATES} />
            </Menu>
          </Popover>
        </ToolbarGroup>
      </Toolbar>
    );
  }

}

export default DevicesToolbar;
