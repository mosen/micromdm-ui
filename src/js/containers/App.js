'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import App from '../components/App';
import * as snackbarActions from '../actions/ui/snackbar';

const mapDispatchToProps = (dispatch) => {
  return {
    snackbarActions: bindActionCreators(snackbarActions, dispatch)
  };
};

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    snackbar: state.notifications.snackbar
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
