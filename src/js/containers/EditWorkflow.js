'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import EditWorkflow from '../components/EditWorkflow';
import * as actions from '../actions/api/workflows';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

function mapStateToProps (state) {
  return {
    workflow: state.workflow
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditWorkflow);
