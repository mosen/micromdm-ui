'use strict';
import React, {Component, PropTypes} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';

import DeviceMainDetail from './DeviceMainDetail';
import CertificateListDetail from './CertificateListDetail';
import ProfileListDetail from './ProfileListDetail';
import UpdateListDetail from './UpdateListDetail';
import CommandListDetail from './CommandListDetail';

import { commandFactory } from '../actions/util/command';
import * as MDM from '../constants/mdm';

// Device View Page
class DevicePage extends Component {

  static propTypes = {
    api: PropTypes.shape({
      read: PropTypes.func.isRequired,
      certsIndex: PropTypes.func.isRequired
    }),
    commandsApi: PropTypes.shape({
      index: PropTypes.func.isRequired
    }),
    params: PropTypes.shape({
      uuid: PropTypes.string.isRequired
    }),
    cmd: PropTypes.shape({
      create: PropTypes.func.isRequired
    }),
    ui: PropTypes.shape({
      setCertListExpanded: PropTypes.func,
      setProfileListExpanded: PropTypes.func,
      setUpdateListExpanded: PropTypes.func,
      setCommandListExpanded: PropTypes.func
    }),
    router: PropTypes.object,
    certificates: PropTypes.shape({
      items: PropTypes.array.isRequired,
      expanded: PropTypes.bool.isRequired
    }),
    profiles: PropTypes.shape({
      items: PropTypes.array.isRequired,
      expanded: PropTypes.bool.isRequired
    }),
    updates: PropTypes.shape({
      items: PropTypes.array.isRequired,
      expanded: PropTypes.bool.isRequired
    }),
    commands: PropTypes.shape({
      items: PropTypes.array.isRequired,
      expanded: PropTypes.bool.isRequired
    })
  };

  constructor (props) {
    super(props);

    this.handleClickBack = this.handleClickBack.bind(this);

    this.handleCertificateListExpand = this.handleCertificateListExpand.bind(this);
    this.handleProfileListExpand = this.handleProfileListExpand.bind(this);
    this.handleUpdateListExpand = this.handleUpdateListExpand.bind(this);
    this.handleCommandListExpand = this.handleCommandListExpand.bind(this);
  }

  componentWillMount () {
    this.props.api.read(this.props.params.uuid);
  }

  handleClickBack () {
    this.props.router.goBack();
  }

  handleCertificateListExpand () {
    this.props.ui.setCertListExpanded(!this.props.certificates.expanded);

    const uuid = this.props.device.attributes.uuid;
    this.props.api.certsIndex(uuid);
  }

  handleProfileListExpand () {
    this.props.ui.setProfileListExpanded(!this.props.profiles.expanded);
  }

  handleUpdateListExpand () {
    this.props.ui.setUpdateListExpanded(!this.props.updates.expanded);
  }

  handleCommandListExpand () {
    this.props.ui.setCommandListExpanded(!this.props.commands.expanded);
    const udid = this.props.device.attributes.udid;
    this.props.commandsApi.index(udid);
  }

  render () {
    const {
      device: {
        attributes
      },
      loading,
      error,

      certificates,
      profiles,
      updates,
      commands,
      api: {
        certsIndex
      }
    } = this.props;

    return (
      <div className='Device'>
        <FlatButton label='Back' onClick={this.handleClickBack}/>
        {loading &&
          <CircularProgress />
        }
        <DeviceMainDetail loading={loading} attributes={attributes} />
        <CommandListDetail onExpandChange={this.handleCommandListExpand} {...commands} />
        <CertificateListDetail onExpandChange={this.handleCertificateListExpand} {...certificates} />
        <ProfileListDetail onExpandChange={this.handleProfileListExpand} {...profiles} />
        <UpdateListDetail onExpandChange={this.handleUpdateListExpand} {...updates} />
      </div>
    );
  }

}

export default DevicePage;
