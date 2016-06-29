'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Device from '../components/Device';
import * as actions from '../actions/api/devices';
import * as snackbarActions from '../actions/ui/snackbar';

const mapDispatchToProps = (dispatch) => {
  return {
    api: bindActionCreators(actions, dispatch),
    snackbar: bindActionCreators(snackbarActions, dispatch)
  };
};

function mapStateToProps (state) {
  return {
    device: state.device
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Device);
