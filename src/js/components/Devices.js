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

import DeviceList from './DeviceList';
import { deviceInformation } from '../actions/util/command';

class Devices extends Component {

  static propTypes = {
    api: PropTypes.shape({
      index: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired
    }),
    ui: PropTypes.shape({
      changeSelection: PropTypes.func.isRequired,
      setSelectionMenuVisible: PropTypes.func.isRequired
    }),
    cmd: PropTypes.shape({
      create: PropTypes.func.isRequired
    }),
    devices: PropTypes.object.isRequired,
    selectionMenuVisible: PropTypes.bool.isRequired,
    selectionMenuAnchor: PropTypes.element
  };

  static defaultProps = {
    open: false
  };

  constructor (props) {
    super(props);

    this.state = {
      anchorEl: null
    };

    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleTouchTapSelectionMenu = this.handleTouchTapSelectionMenu.bind(this);
    this.handleSelectionMenuClose = this.handleSelectionMenuClose.bind(this);
    this.handleTouchTapQueryMenuItem = this.handleTouchTapQueryMenuItem.bind(this);
    this.handleTouchTapSelectionPush = this.handleTouchTapSelectionPush.bind(this);
  }

  componentWillMount () {
    this.props.api.index();
  }

  handleSelectionChange (selection) {
    this.props.ui.changeSelection(selection);
  }

  handleTouchTapSelectionMenu (evt) {
    evt.preventDefault();

    this.props.ui.setSelectionMenuVisible(true, evt.currentTarget);
    this.setState({ // For some reason you cannot pass the element through redux state tree
      anchorEl: evt.currentTarget
    });
  }

  getSelectedDevices () {
    const {
      devices: {
        items,
        selection
      }
    } = this.props;

    return items.filter(function (device) {
      return selection.indexOf(device.uuid) !== -1;
    });
  }

  handleTouchTapSelectionPush (evt) {
    evt.preventDefault();

    const devices = this.getSelectedDevices();

    devices.forEach((device) => {
      this.props.api.push(device.udid);
    });
  }

  handleTouchTapQueryMenuItem (evt) {
    evt.preventDefault();

    const {
      devices: {
        items,
        selection
      }
    } = this.props;

    const selectedDevices = items.filter(function (device) {
      return selection.indexOf(device.uuid) !== -1;
    });

    const commands = selectedDevices.map(function (device) {
      return deviceInformation(device.udid);
    });

    commands.forEach((command) => {
      this.props.cmd.create(command);
    });

    this.props.ui.setSelectionMenuVisible(false, null);
  }

  handleSelectionMenuClose () {
    this.props.ui.setSelectionMenuVisible(false, null);
  }

  render () {
    const {
      devices,
      selectionMenuVisible
    } = this.props;

    const canDelete = devices.selection.length > 0;

    return (
      <div className='Devices'>
        <Toolbar>
          <ToolbarGroup firstChild>
            <FlatButton label='Delete' secondary disabled={!canDelete} />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text='Selected Item(s)' />
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

        {!devices.error && <DeviceList
          loading={devices.loading}
          items={devices.items}
          selection={devices.selection}
          onSelectionChange={this.handleSelectionChange}
        />}
      </div>
    );
  }

}

export default Devices;
