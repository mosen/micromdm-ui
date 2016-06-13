'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Applications from '../components/Applications';
import * as actions from '../actions/api/applications';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

function mapStateToProps (state) {
  return {
    applications: state.applications
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Applications);
