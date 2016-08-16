'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

const mapDispatchToProps = (dispatch) => {
  return {};
};

function mapStateToProps (state) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
