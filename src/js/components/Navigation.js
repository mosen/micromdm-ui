import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {
  ResponsiveNavigation,
  TopBarLeft,
  TopBarRight,
  Menu,
  MenuItem,
  MenuText
} from 'react-foundation';
import $ from 'jquery';
import {Foundation} from 'foundation.core';
import 'foundation.util.keyboard';
import 'foundation.util.box';
import 'foundation.util.nest';
import 'foundation.util.mediaQuery';
import 'foundation.util.motion';
import 'foundation.dropdownMenu';
import 'foundation.responsiveToggle';

const propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  router: PropTypes.object
};

class Navigation extends Component {

  componentDidMount () {
    const rightMenu = $(this.refs.navbar).find('.rightMenu');
    this._menu = new Foundation.DropdownMenu(rightMenu, {});
  }

  componentWillUnmount () {
    this._menu.destroy();
  }

  componentWillReceiveProps () {
    this._menu._init();
  }

  render () {
    const {
      isAuthenticated,
      user
    } = this.props;

    const navigationOptions = [
      <MenuItem key='devices'><Link to='/devices'>Devices</Link></MenuItem>,
      <MenuItem key='profiles'><Link to='/profiles'>Profiles</Link></MenuItem>,
      <MenuItem key='applications'><Link to='/applications'>Applications</Link></MenuItem>,
      <MenuItem key='workflows'><Link to='/workflows'>Workflows</Link></MenuItem>
    ];

    const adminMenu = (
      <MenuItem key='admin'><Link to='#'>Admin</Link>
        <Menu>
          <MenuItem key='users'><Link to='/users'>Users</Link></MenuItem>
        </Menu>
      </MenuItem>
    );

    return (
      <ResponsiveNavigation className='navbar' ref='navbar'>
        <TopBarLeft>
          <Menu>
            {isAuthenticated && navigationOptions}
          </Menu>
        </TopBarLeft>
        <TopBarRight>
          <Menu isDropdown className='rightMenu' data-dropdown-menu>
            {adminMenu}
            <MenuItem>
              {!isAuthenticated ? <Link to='/login'>Log in</Link> : <Link to='/logout'>Log out</Link>}
            </MenuItem>
          </Menu>
        </TopBarRight>
      </ResponsiveNavigation>
    );
  }
}

Navigation.PropTypes = propTypes;

export default Navigation;

