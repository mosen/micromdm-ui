'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Profiles from '../components/Profiles';
import * as actions from '../actions/api/profiles';
import * as uiActions from '../actions/ui/profiles';

const mapDispatchToProps = (dispatch) => {
  return {
    api: bindActionCreators(actions, dispatch),
    ui: bindActionCreators(uiActions, dispatch)
  };
};

function mapStateToProps (state) {
  return {
    profiles: state.profiles
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles);
