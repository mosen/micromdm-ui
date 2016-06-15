'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Upload from '../components/Upload';
import * as actions from '../actions/ui/uploads';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

function mapStateToProps (state) {
  return state.uploads;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
