'use strict';
import React, {Component, PropTypes} from 'react';

import DeviceList from './DeviceList';
import DevicesToolbar from './DevicesToolbar';
import ErrorDialog from './ErrorDialog';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';
import WorkflowDrawer from './drawers/WorkflowDrawer';

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
    workflows: PropTypes.object.isRequired,
    selectionMenuVisible: PropTypes.bool.isRequired,
    selectionMenuAnchor: PropTypes.element,
    error: PropTypes.bool.isRequired,
    errorDetails: PropTypes.string,
    errorDialogOpen: PropTypes.bool,
    workflowDrawerOpen: PropTypes.bool
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
    this.handleCloseError = this.handleCloseError.bind(this);
    this.handleCloseDrawerTouchTap = this.handleCloseDrawerTouchTap.bind(this);
    this.handleAssignAction = this.handleAssignAction.bind(this);
    this.handleAssignWorkflow = this.handleAssignWorkflow.bind(this);
  }

  componentWillMount () {
    this.props.api.index();
    this.props.wfApi.index();
  }

  handleSelectionChange (selection) {
    this.props.ui.changeSelection(selection);
  }

  handleQueryAction (commandType) {
    const {
      devices: {
        items,
        selection,
        error,
        errorDetails
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
    this.props.snackbar.showSnackbar('Started fetching DEP device(s), this may take a short while.');
  }

  hideActionMenu () {
    this.props.ui.setSelectionMenuVisible(false, null);
  }

  showActionMenu () {
    this.props.ui.setSelectionMenuVisible(true, null);
  }

  handleCloseError () {
    this.props.ui.setErrorDialogVisible(false);
  }

  handleCloseDrawerTouchTap (evt) {
    evt.preventDefault();
    this.props.ui.drawerVisible(false);
  }

  handleAssignAction () {
    this.props.ui.drawerVisible();
  }

  handleAssignWorkflow (workflow) {
    console.dir(workflow);
    const devices = this.getSelectedDevices();

    devices.forEach((device) => {
      this.props.api.assignWorkflow(device.uuid, workflow.uuid);
    });
    this.props.snackbar.showSnackbar(`Assigned workflow to ${devices.length} device(s).`);
  }

  render () {
    const {
      devices,
      workflows,
      selectionMenuVisible,
      workflowDrawerOpen,
      error,
      errorDetails,
      errorDialogOpen
    } = this.props;

    let errorDialog = '';

    if (error) {
      errorDialog = <ErrorDialog title='Cannot fetch devices' open={errorDialogOpen} onClose={this.handleCloseError}>
        <p>The list of devices could not be fetched.</p>
        <p>Please check your MicroMDM connection settings and verify that your MicroMDM server is reachable.</p>
        <p>Additional information is provided below</p>
        <code>
          Error: {errorDetails.name}<br />
          Message: {errorDetails.message}
        </code>
      </ErrorDialog>;
    }

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
          onAssignAction={this.handleAssignAction}
        />
        {!error && <DeviceList
          loading={devices.loading}
          items={devices.items}
          selection={devices.selection}
          onSelectionChange={this.handleSelectionChange}
        />}
        <Drawer width={400} openSecondary open={workflowDrawerOpen}>
          <IconButton onClick={this.handleCloseDrawerTouchTap}><Clear /></IconButton>
          <WorkflowDrawer items={workflows.items} onClickAdd={this.handleAssignWorkflow} />
        </Drawer>
        {errorDialog}
      </div>
    );
  }

}

export default Devices;
