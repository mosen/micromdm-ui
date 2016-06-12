import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {
  ResponsiveNavigation,
  TopBarLeft,
  TopBarRight,
  Menu,
  MenuItem,
  MenuText,
  MenuIcon,
  TitleBar,
  TitleBarTitle,
  Icon
} from 'react-foundation';
import $ from 'jquery';
import {Foundation} from 'foundation.core';
import 'foundation.util.mediaQuery';
import 'foundation.util.triggers';
import 'foundation.util.motion';
import 'foundation.offcanvas';

const propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  router: PropTypes.object
};

class Navigation extends Component {

  componentDidMount () {
    this._offcanvas = new Foundation.OffCanvas($(this._el), {});
  }

  componentWillUnmount () {
    this._offcanvas.destroy();
  }

  componentWillReceiveProps () {
    this._offcanvas && this._offcanvas._init();
  }

  render () {
    const {
    } = this.props;

    const navigationOptions = [
      <MenuItem key='devices'><Link to='/devices'><Icon name='fi-mobile' />{' '}Devices</Link></MenuItem>,
      <MenuItem key='profiles'><Link to='/profiles'><Icon name='fi-widget' />{' '}Profiles</Link></MenuItem>,
      <MenuItem key='applications'><Link to='/applications'><Icon name='fi-page' />{' '}Applications</Link></MenuItem>,
      <MenuItem key='workflows'><Link to='/workflows'><Icon name='fi-list-thumbnails' />{' '}Workflows</Link></MenuItem>
    ];

    const adminMenu = (
      <MenuItem key='admin'><Link to='#'>Admin</Link>
        <Menu>
          <MenuItem key='users'><Link to='/users'>Users</Link></MenuItem>
        </Menu>
      </MenuItem>
    );

    return (
      <div className='off-canvas-wrapper' ref={(c) => { this._el = c; }}>
        <div className='off-canvas-wrapper-inner' data-off-canvas-wrapper-inner>
          <div className='off-canvas position-left reveal-for-large' id='leftMenu' data-off-canvas>
            <Menu isVertical>
              {navigationOptions}
            </Menu>
          </div>
          <div className='off-canvas-content' data-off-canvas-content>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Navigation.PropTypes = propTypes;

export default Navigation;

