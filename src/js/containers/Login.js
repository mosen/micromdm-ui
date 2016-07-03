'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Login from '../components/Login';

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

function mapStateToProps (state) {
  return {
    login: state.login
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
