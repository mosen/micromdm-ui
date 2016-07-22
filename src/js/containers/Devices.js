'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Devices from '../components/Devices';
import * as actions from '../actions/api/devices';
import * as workflowApiActions from '../actions/api/workflows';
import * as uiActions from '../actions/ui/devices';
import * as cmdActions from '../actions/api/commands';
import * as snackbarActions from '../actions/ui/snackbar';

const mapDispatchToProps = (dispatch) => {
  return {
    api: bindActionCreators(actions, dispatch),
    wfApi: bindActionCreators(workflowApiActions, dispatch),
    ui: bindActionCreators(uiActions, dispatch),
    cmd: bindActionCreators(cmdActions, dispatch),
    snackbar: bindActionCreators(snackbarActions, dispatch)
  };
};

function mapStateToProps (state) {
  return {
    devices: state.devices,
    workflows: state.workflows,
    selectionMenuVisible: state.devices.selectionMenuVisible,
    selectionMenuAnchor: state.devices.selectionMenuAnchor,
    error: state.devices.error,
    errorDetails: state.devices.errorDetails,
    errorDialogOpen: state.devices.errorDialogOpen,
    workflowDrawerOpen: state.devices.workflowDrawerOpen,
    commands: state.commands
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Devices);
