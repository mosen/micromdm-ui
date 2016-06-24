import React, {Component, PropTypes} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from './Navigation';
import '../../sass/app.scss';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

class App extends Component {

  static propTypes = {
    location: PropTypes.object,
    snackbar: PropTypes.object,
    snackbarActions: PropTypes.shape({
      hideSnackbar: PropTypes.func.isRequired
    })
  };

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
