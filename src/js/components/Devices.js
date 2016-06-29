'use strict';
import React, {Component, PropTypes} from 'react';

import DeviceList from './DeviceList';
import DevicesToolbar from './DevicesToolbar';

import { commandFactory } from '../actions/util/command';

class Devices extends Component {

  static propTypes = {
    api: PropTypes.shape({
      index: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
      destroy: PropTypes.func.isRequired,
      depFetch: PropTypes.func.isRequired
    }),
    ui: PropTypes.shape({
      changeSelection: PropTypes.func.isRequired,
      setSelectionMenuVisible: PropTypes.func.isRequired
    }),
    cmd: PropTypes.shape({
      create: PropTypes.func.isRequired
    }),
    snackbar: PropTypes.shape({
      showSnackbar: PropTypes.func.isRequired
    }),
    devices: PropTypes.object.isRequired,
    commands: PropTypes.object.isRequired,
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
    this.handleQueryAction = this.handleQueryAction.bind(this);
    this.handlePushAction = this.handlePushAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
    this.handleFetchDEPAction = this.handleFetchDEPAction.bind(this);
    this.hideActionMenu = this.hideActionMenu.bind(this);
    this.showActionMenu = this.showActionMenu.bind(this);
  }

  componentWillMount () {
    this.props.api.index();
  }

  handleSelectionChange (selection) {
    this.props.ui.changeSelection(selection);
  }

  handleQueryAction (commandType) {
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
      return commandFactory(commandType)(device.udid);
    });

    commands.forEach((command) => {
      this.props.cmd.create(command);
    });

    this.props.ui.setSelectionMenuVisible(false, null);
    this.props.snackbar.showSnackbar(`Created new command(s) for ${selection.length} device(s).`);
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

  handlePushAction () {
    const devices = this.getSelectedDevices();

    devices.forEach((device) => {
      this.props.api.push(device.udid);
    });
    this.props.snackbar.showSnackbar(`Pushed queued commands for ${devices.length} device(s).`);
  }

  handleDeleteAction () {
    const devices = this.getSelectedDevices();

    devices.forEach((device) => {
      this.props.api.destroy(device.udid);
    });
  }

  handleFetchDEPAction () {
    this.props.api.depFetch();
  }

  hideActionMenu () {
    this.props.ui.setSelectionMenuVisible(false, null);
  }

  showActionMenu () {
    this.props.ui.setSelectionMenuVisible(true, null);
  }

  render () {
    const {
      devices,
      selectionMenuVisible
    } = this.props;

    return (
      <div className='Devices'>
        <DevicesToolbar
          selection={devices.selection}
          onActionMenuTouchTap={this.showActionMenu}
          onActionMenuClose={this.hideActionMenu}
          selectionMenuVisible={selectionMenuVisible}
          onPushAction={this.handlePushAction}
          onQueryAction={this.handleQueryAction}
          onDeleteAction={this.handleDeleteAction}
          onFetchDEPAction={this.handleFetchDEPAction}
        />
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
