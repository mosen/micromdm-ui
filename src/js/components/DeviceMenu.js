'use strict';
import React, {Component, PropTypes} from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import FormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted';
import Https from 'material-ui/svg-icons/action/https';
import SettingsApplications from 'material-ui/svg-icons/action/settings-applications';
import Apps from 'material-ui/svg-icons/navigation/apps';
import Update from 'material-ui/svg-icons/action/update';
import Info from 'material-ui/svg-icons/action/info';

import ProductIcon from './ProductIcon';

import './DeviceMenu.scss';

class DeviceMenu extends Component {

  static propTypes = {
    params: PropTypes.shape({
      uuid: PropTypes.string.isRequired
    }),
    router: PropTypes.object
  };

  handleClickBack = () => {
    this.props.router.goBack();
  };

  render() {
    const {
      device: {
        attributes
      },
      router
    } = this.props;

    const navToCommands = () => {
      router.push(`/devices/${this.props.params.uuid}/commands`);
    };

    const navToCertificates = () => {
      router.push(`/devices/${this.props.params.uuid}/certificates`);
    };

    const navToApplications = () => {
      router.push(`/devices/${this.props.params.uuid}/applications`);
    };

    const navToIndex = () => {
      router.push(`/devices/${this.props.params.uuid}`);
    };


    return (
      <div className='DeviceMenu'>
        <List className='Inverse' style={{color: 'white'}}>
          <ListItem
            leftIcon={<ChevronLeft color="#FFFFFF" />}
            primaryText='Back'
            onClick={this.handleClickBack}
            style={{color: 'white'}}
          />
        </List>
        <List>
          <ListItem
            rightIcon={<ProductIcon name={this.props.device.attributes.product_name} />}
            primaryText={attributes.device_name || attributes.serial_number}
            secondaryText={attributes.serial_number}
          />
        </List>
        <Divider />
        <List>
          <ListItem
            leftIcon={<Info />}
            primaryText="Info"
            onClick={navToIndex}
          />
        </List>
        <Divider />
        <List>
          <ListItem primaryText="Commands" leftIcon={<FormatListBulleted />} onClick={navToCommands} />
          <ListItem primaryText="Certificates" leftIcon={<Https />} onClick={navToCertificates} />
          <ListItem primaryText="Profiles" leftIcon={<SettingsApplications />} />
          <ListItem primaryText="Updates" leftIcon={<Update />} />
          <ListItem primaryText="Applications" leftIcon={<Apps />} onClick={navToApplications} />
        </List>
      </div>
    );
  }
}

export default DeviceMenu;
