'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as connectionActions from '../actions/connection';
import * as uiActions from '../actions/ui/login';
import {push} from 'react-router-redux';
import LoginDialog from '../components/LoginDialog';

const mapDispatchToProps = (dispatch) => {
  return {
    setEndpoint: (endpoint) => {
      console.log(`Setting micromdm endpoint ${endpoint}`);
      dispatch(connectionActions.setEndpoint(endpoint));
    },
    ui: bindActionCreators(uiActions, dispatch),
    push: (url) => {
      dispatch(push(url));
    }
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
)(LoginDialog);
