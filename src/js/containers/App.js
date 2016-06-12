'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import App from '../components/App';

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators(actions, dispatch);
  return {};
};

function mapStateToProps (state) {
  return state;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
