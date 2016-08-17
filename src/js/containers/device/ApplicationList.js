'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import ApplicationList from '../../components/device/ApplicationList';
import * as apiActions from '../../actions/api/devices';


const mapDispatchToProps = (dispatch) => {
  return {
    api: bindActionCreators(apiActions, dispatch)
  };
};

function mapStateToProps (state) {
  return {
    applications: state.device.applications,
    udid: state.device.device.attributes.udid
  };
}

const routedApplicationList = withRouter(ApplicationList);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(routedApplicationList);
