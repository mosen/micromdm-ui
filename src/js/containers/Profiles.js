'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Profiles from '../components/Profiles';
import * as actions from '../actions/api/profiles';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
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
