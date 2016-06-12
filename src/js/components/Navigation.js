import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Devices from 'material-ui/svg-icons/device/devices';
import SettingsApplications from 'material-ui/svg-icons/action/settings-applications';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Apps from 'material-ui/svg-icons/navigation/apps';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

const propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  router: PropTypes.object
};

class Navigation extends Component {

  render () {
    const {
    } = this.props;

    return (
      <div>
        <Paper>
          <Menu>
            <MenuItem primaryText='Devices' leftIcon={<Devices />} />
            <MenuItem primaryText='Profiles' leftIcon={<SettingsApplications />} />
            <MenuItem primaryText='Workflows' leftIcon={<Devices />} />
            <MenuItem primaryText='Applications' leftIcon={<Apps />} />
          </Menu>
        </Paper>
      </div>
    );
  }
}

Navigation.PropTypes = propTypes;

export default Navigation;

