'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import CertificateList from '../../components/device/CertificateList';
import * as apiActions from '../../actions/api/devices';


const mapDispatchToProps = (dispatch) => {
  return {
    api: bindActionCreators(apiActions, dispatch)
  };
};

function mapStateToProps (state) {
  return {
    certificates: state.device.certificates,
    udid: state.device.device.attributes.udid
  };
}

const routedCertificateList = withRouter(CertificateList);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(routedCertificateList);
