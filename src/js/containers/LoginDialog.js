'use strict';
import {connect} from 'react-redux';
import * as connectionActions from '../actions/connection';
import {push} from 'react-router-redux';
import LoginDialog from '../components/LoginDialog';

const mapDispatchToProps = (dispatch) => {
  return {
    setEndpoint: (endpoint) => {
      dispatch(connectionActions.setEndpoint(endpoint));
    },
    push: (url) => {
      dispatch(push(url));
    }
  };
};

function mapStateToProps (state) {
  return {
    endpoint: state.login.endpoint,
    dialogOpen: state.login.dialogOpen
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginDialog);
