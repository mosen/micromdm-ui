'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Devices from '../components/Devices';
import * as actions from '../actions/api/devices';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

function mapStateToProps (state) {
  return {
    devices: state.devices
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Devices);
