import React, {Component, PropTypes} from 'react';

import Navigation from './Navigation';
import '../../sass/app.scss';

const propTypes = {
  children: PropTypes.object
};

class App extends Component {

  render () {
    return (
      <div className='App'>
        <Navigation>
          {this.props.children}
        </Navigation>
      </div>
    );
  }

}

App.propTypes = propTypes;

export default App;
