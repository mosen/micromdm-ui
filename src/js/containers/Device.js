'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Device from '../components/Device';
import * as actions from '../actions/api/devices';
import * as snackbarActions from '../actions/ui/snackbar';
import * as cmdActions from '../actions/api/commands';

const mapDispatchToProps = (dispatch) => {
  return {
    api: bindActionCreators(actions, dispatch),
    snackbar: bindActionCreators(snackbarActions, dispatch),
    cmd: bindActionCreators(cmdActions, dispatch)
  };
};

function mapStateToProps (state) {
  return {
    ...state.device
  };
}

const routedDevice = withRouter(Device);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(routedDevice);
