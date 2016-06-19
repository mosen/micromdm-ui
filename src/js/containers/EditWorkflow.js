'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import EditWorkflow from '../components/EditWorkflow';
import * as uiActions from '../actions/ui/workflow';

const mapDispatchToProps = (dispatch) => {
  return {
    ui: bindActionCreators(uiActions, dispatch)
  };
};

function mapStateToProps (state) {
  return {
    workflow: state.workflow,
    profiles: state.profiles.items,
    workflows: state.workflows.items,
    applications: state.applications.items
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditWorkflow);
