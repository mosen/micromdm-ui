'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import DevicePage from '../components/DevicePage';
import * as apiActions from '../actions/api/devices';
import * as commandApiActions from '../actions/api/commands';
import * as snackbarActions from '../actions/ui/snackbar';
import * as cmdActions from '../actions/api/commands';

const mapDispatchToProps = (dispatch) => {
  return {
    api: bindActionCreators(apiActions, dispatch),
    commandsApi: bindActionCreators(commandApiActions, dispatch),
    snackbar: bindActionCreators(snackbarActions, dispatch),
    cmd: bindActionCreators(cmdActions, dispatch)
  };
};

function mapStateToProps (state) {
  return {
    ...state.device
  };
}

const routedDevice = withRouter(DevicePage);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(routedDevice);
