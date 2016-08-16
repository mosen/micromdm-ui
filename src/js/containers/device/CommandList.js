'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import CommandList from '../../components/device/CommandList';
import * as apiActions from '../../actions/api/commands';


const mapDispatchToProps = (dispatch) => {
  return {
    api: bindActionCreators(apiActions, dispatch)
  };
};

function mapStateToProps (state) {
  return {
    commands: state.device.commands,
    udid: state.device.device.attributes.udid
  };
}

const routedCommandList = withRouter(CommandList);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(routedCommandList);
