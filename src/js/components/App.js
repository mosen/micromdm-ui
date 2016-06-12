import React, {Component, PropTypes} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from './Navigation';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

const propTypes = {
  children: PropTypes.object
};

class App extends Component {

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='App'>
          <Navigation />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }

}

App.propTypes = propTypes;

export default App;
