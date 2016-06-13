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

class App extends Component {

  static propTypes = {
    location: PropTypes.string
  };

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='App'>
          <Navigation location={this.props.location} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }

}

export default App;
