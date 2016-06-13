'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Workflows from '../components/Workflows';
import * as actions from '../actions/api/workflows';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

function mapStateToProps (state) {
  return {
    workflows: state.workflows
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workflows);
