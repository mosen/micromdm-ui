import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import * as colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Snackbar from 'material-ui/Snackbar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from './Navigation';
import '../../sass/app.scss';

const muiTheme = getMuiTheme({
  palette: {
    primary2Color: colors.blue800,
    primary1Color: colors.lightBlueA400,
    primary3Color: colors.cyan500,
    accent1Color: colors.cyan500
  }
});

class App extends Component {

  static propTypes = {
    children: PropTypes.element,
    location: PropTypes.object,
    snackbar: PropTypes.object,
    snackbarActions: PropTypes.shape({
      hideSnackbar: PropTypes.func.isRequired
    })
  };

  constructor (props) {
    super(props);

    this.handleClickConnection = this.handleClickConnection.bind(this);
  }

  handleClickConnection (evt) {
    evt.preventDefault();
    browserHistory.push('/login');
  }

  render () {
    const {
      snackbar,
      snackbarActions: {
        hideSnackbar
      }
    } = this.props;

    const onSnackbarRequestClose = () => {
      hideSnackbar(0);
    };

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='App'>
          <Header onClickConnection={this.handleClickConnection} />
          <Navigation location={this.props.location} />
          {this.props.children}
          {snackbar.visible && <Snackbar
            open
            message={snackbar.message}
            autoHideDuration={4000}
            onRequestClose={onSnackbarRequestClose}
          />}
        </div>
      </MuiThemeProvider>
    );
  }

}

export default App;
