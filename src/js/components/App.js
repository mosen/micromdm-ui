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
    snackbar: PropTypes.object
  };

  render () {
    const {
      snackbar
    } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='App'>
          <Navigation location={this.props.location} />
          {this.props.children}
          {snackbar.visible && <Snackbar
            open
            message={snackbar.message}
            autoHideDuration={4000}
          />}
        </div>
      </MuiThemeProvider>
    );
  }

}

export default App;
