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
class Device extends Component {

  static propTypes = {
    api: PropTypes.shape({
      read: PropTypes.func.isRequired
    }),
    params: PropTypes.shape({
      uuid: PropTypes.string.isRequired
    }),
    cmd: PropTypes.shape({
      create: PropTypes.func.isRequired
    })
  };

  constructor (props) {
    super(props);

    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleCertRefresh = this.handleCertRefresh.bind(this);
  }

  componentWillMount () {
    this.props.api.read(this.props.params.uuid);
  }

  handleClickBack (evt) {
    this.props.router.goBack();
  }

  handleCertRefresh () {
    const certCmd = commandFactory(MDM.CERTIFICATE_LIST)(this.props.params.uuid);
    this.props.cmd.create(certCmd);
  }

  render () {
    const {
      attributes,
      loading,
      error
    } = this.props;

    return (
      <div className='Device'>
        <FlatButton label='Back' onClick={this.handleClickBack}/>
        {loading &&
          <CircularProgress />
        }
        <DeviceMainDetail loading={loading} attributes={attributes} />
        <CertificateListDetail lastUpdated={'Last updated: never'} onRefresh={this.handleCertRefresh} />
        <ProfileListDetail lastUpdated={'Last updated: never'} />
        <UpdateListDetail lastUpdated={'Last updated: never'} />
      </div>
    );
  }

}

export default Device;
