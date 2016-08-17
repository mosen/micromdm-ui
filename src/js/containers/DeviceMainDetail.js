'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import DeviceMainDetail from '../components/DeviceMainDetail';
import * as apiActions from '../actions/api/devices';
import * as commandApiActions from '../actions/api/commands';
import * as snackbarActions from '../actions/ui/snackbar';

const mapDispatchToProps = (dispatch) => {
  return {
    api: bindActionCreators(apiActions, dispatch),
    commandsApi: bindActionCreators(commandApiActions, dispatch),
    snackbar: bindActionCreators(snackbarActions, dispatch),
  };
};

function mapStateToProps (state) {
  return {
    ...state.device.device
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceMainDetail);
