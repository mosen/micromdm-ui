import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

export const fields = [
  'allowAllAppsAccess',
  'certServer',
  'certTemplate',
  'certificateAcquisitionMechanism',
  'certificateAuthority',
  'certificateRenewalTimeInterval',
  'description',
  'keyIsExtractable',
  'promptForCredentials',
  'keysize'
];

const validate = (values) => {
  'use strict';
  const errors = {};

  // TODO: make sure certServer looks like a hostname

  return errors;
};

class ADCertificatePayloadForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  render () {
    const {
      fields: {
        allowAllAppsAccess,
        certServer,
        certTemplate,
        certificateAcquisitionMechanism,
        certificateAuthority,
        certificateRenewalTimeInterval,
        description,
        keyIsExtractable,
        promptForCredentials,
        keysize
      },
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Apps have access to private key</label>
          <input type='checkbox' {...allowAllAppsAccess} />
        </div>
        <div>
          <label>Fully qualified host name of the Active Directory issuing CA</label>
          <input type='text' {...certServer} />
        </div>
        <div>
          <label>Template name as it appears in the certificate templates snap-in</label>
          <input type='text' {...certTemplate} />
        </div>
        <div>
          <label>Certificate acquisition mechanism</label>
          <select {...certificateAcquisitionMechanism}>
            <option value='RPC'>RPC</option>
            <option value='HTTP'>HTTP</option>
          </select>
        </div>
        <div>
          <label>Certificate authority name (The common name in the CA certificate)</label>
          <input type='text' {...certificateAuthority} />
        </div>
        <div>
          <label>Number of days prior to certificate expiry to warn user using a notification</label>
          <input type='number' {...certificateRenewalTimeInterval} />
        </div>
        <div>
          <label>Description of the certificate identity (appears in keychain, and safari)</label>
          <input type='text' {...description} />
        </div>
        <div>
          <label>Private key can be extracted</label>
          <input type='checkbox' {...keyIsExtractable} />
        </div>
        <div>
          <label>Prompt for credentials (only applies to User certificates using manual download).</label>
          <input type='checkbox' {...promptForCredentials} />
        </div>
        <div>
          <label>Key size</label>
          <input type='number' {...keysize} />
        </div>
        <div>
          <input type='submit' value='Save' />
        </div>
      </form>
    );
  }
}

const ADCertificatePayloadReduxForm = reduxForm({
  form: 'payload_adcertificate',
  fields,
  validate
})(ADCertificatePayloadForm);

export default ADCertificatePayloadReduxForm;
