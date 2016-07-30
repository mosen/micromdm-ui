'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Workflows from '../components/Workflows';
import * as actions from '../actions/api/workflows';
import * as uiActions from '../actions/ui/workflows';

const mapDispatchToProps = (dispatch) => {
  return {
    api: bindActionCreators(actions, dispatch),
    ui: bindActionCreators(uiActions, dispatch)
  };
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
