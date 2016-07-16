'use strict';
import React, {Component, PropTypes} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';

import DeviceMainDetail from './DeviceMainDetail';
import CertificateListDetail from './CertificateListDetail';
import ProfileListDetail from './ProfileListDetail';
import UpdateListDetail from './UpdateListDetail';

import { commandFactory } from '../actions/util/command';
import * as MDM from '../constants/mdm';

// Device View Page
class DevicePage extends Component {

  static propTypes = {
    api: PropTypes.shape({
      read: PropTypes.func.isRequired
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
      setUpdateListExpanded: PropTypes.func
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
    })
  };

  constructor (props) {
    super(props);

    this.handleClickBack = this.handleClickBack.bind(this);

    this.handleCertificateListExpand = this.handleCertificateListExpand.bind(this);
    this.handleProfileListExpand = this.handleProfileListExpand.bind(this);
    this.handleUpdateListExpand = this.handleUpdateListExpand.bind(this);
  }

  componentWillMount () {
    this.props.api.read(this.props.params.uuid);
  }

  handleClickBack (evt) {
    this.props.router.goBack();
  }

  handleCertificateListExpand () {
    this.props.ui.setCertListExpanded(!this.props.certificates.expanded);
  }

  handleProfileListExpand () {
    this.props.ui.setProfileListExpanded(!this.props.profiles.expanded);
  }

  handleUpdateListExpand () {
    this.props.ui.setUpdateListExpanded(!this.props.updates.expanded);
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
      updates
    } = this.props;

    return (
      <div className='Device'>
        <FlatButton label='Back' onClick={this.handleClickBack}/>
        {loading &&
          <CircularProgress />
        }
        <DeviceMainDetail loading={loading} attributes={attributes} />
        <CertificateListDetail onExpandChange={this.handleCertificateListExpand} {...certificates} />
        <ProfileListDetail onExpandChange={this.handleProfileListExpand} {...profiles} />
        <UpdateListDetail onExpandChange={this.handleUpdateListExpand} {...updates} />
      </div>
    );
  }

}

export default DevicePage;
