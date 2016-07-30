'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import WorkflowPage from '../components/WorkflowPage';
import * as uiActions from '../actions/ui/workflow';
import * as actions from '../actions/api/workflows';

const mapDispatchToProps = (dispatch) => {
  return {
    ui: bindActionCreators(uiActions, dispatch),
    api: bindActionCreators(actions, dispatch)
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
)(WorkflowPage);
