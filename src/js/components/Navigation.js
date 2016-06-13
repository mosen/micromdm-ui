import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import Devices from 'material-ui/svg-icons/device/devices';
import SettingsApplications from 'material-ui/svg-icons/action/settings-applications';
import Apps from 'material-ui/svg-icons/navigation/apps';
import {Tabs, Tab} from 'material-ui/Tabs';

class Navigation extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired
  };

  render () {
    const {
      location
    } = this.props;

    const pushDevices = () => {
      browserHistory.push('/devices');
    };

    const pushProfiles = () => {
      browserHistory.push('/profiles');
    };

    const pushWorkflows = () => {
      browserHistory.push('/workflows');
    };

    const pushApps = () => {
      browserHistory.push('/applications');
    };

    return (
      <Tabs value={location.pathname}>
        <Tab label='DEVICES' icon={<Devices />} onActive={pushDevices} value='/devices' />
        <Tab label='PROFILES' icon={<SettingsApplications />} onActive={pushProfiles} value='/profiles' />
        <Tab label='WORKFLOWS' icon={<Devices />} onActive={pushWorkflows} value='/workflows' />
        <Tab label='APPS' icon={<Apps />} onActive={pushApps} value='/applications' />
      </Tabs>
    );
  }
}

export default Navigation;

