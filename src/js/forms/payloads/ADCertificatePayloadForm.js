import React, {Component, PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton } from 'material-ui/RadioButton';
import IconButton from 'material-ui/IconButton';
import Help from 'material-ui/svg-icons/action/help';
import {
  AutoComplete,
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle
} from 'redux-form-material-ui';
import semver from 'semver';
import { validateNotEmpty } from '../util/validation';

const certTemplateOptions = [
  'User',
  'Machine'
];

const keySizeOptions = [
  '2048',
  '1024'
];

const requiredFields = [
  'certServer',
  'certificateAuthority',
  'certTemplate',
  'certificateAcquisitionMechanism'
];

const validate = values => {
  const errors = {};

  validateNotEmpty(requiredFields, values, errors);

  return errors;
};

class ADCertificatePayloadForm extends Component {

  static defaultProps = {
    compatIOSEnabled: true,
    compatIOS: '10.0.0',
    compatMacOSEnabled: true,
    compatMacOS: '12.0.0'
  };

  render () {
    const {
      compatMacOS,
      handleSubmit
    } = this.props;

    return (
      <Paper zDepth={1} className='mui-padded'>
        <h2>Active Directory Certificate Payload</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Field name='certServer' component={TextField} floatingLabelText='Certificate server hostname' fullWidth />
          </div>
          <div>
            <Field name='certificateAuthority' component={TextField} floatingLabelText='Certificate Authority (Common Name)' fullWidth />
          </div>
          <div>
            <Field name='certTemplate' component={AutoComplete} dataSource={certTemplateOptions} openOnFocus floatingLabelText='Certificate template, usually "User" or "Machine"' fullWidth />
          </div>
          <div>
            <p>Acquisition mechanism</p>
            <Field name='certificateAcquisitionMechanism' component={RadioButtonGroup} hintText='Certificate acquisition mechanism'>
              <RadioButton value='RPC' label='DCE/RPC' />
              <RadioButton value='HTTP' label='HTTP' />
            </Field>
          </div>
          <div>
            <Field name='keysize' component={AutoComplete} dataSource={keySizeOptions} openOnFocus floatingLabelText='Key size' fullWidth disabled={semver.lt(compatMacOS, '10.11.0')} />
          </div>
          <div>
            <Field name='description' component={TextField} floatingLabelText='Identity certificate description (shown in keychain and safari)' fullWidth />
          </div>
          <div>
            <Field name='certificateRenewalTimeInterval' component={TextField} type='number' floatingLabelText='Certificate expiry warning (number of days before expiry)' fullWidth />
          </div>

          <h4>Private key options</h4>

          <div>
            <Field name='allowAllAppsAccess' component={Toggle} label='All apps have access to private key' />
          </div>
          <div>
            <Field name='keyIsExtractable' component={Toggle} label='Private key can be exported' />
          </div>

          <h4>Manual install options (not applicable for MDM push)</h4>

          <div>
            <Field name='promptForCredentials' component={Toggle} label='Prompt for credentials' />
          </div>
          <div>
            <Field name='username' component={TextField} floatingLabelText='Active Directory Username' fullWidth />
          </div>
          <div>
            <Field name='password' type='password' component={TextField} floatingLabelText='Active Directory Password' fullWidth />
          </div>
          <div>
            <FlatButton label='Save' />
          </div>
        </form>
      </Paper>
    );
  }
}

const ADCertificatePayloadReduxForm = reduxForm({
  form: 'payload_adcertificate',
  validate
})(ADCertificatePayloadForm);

export default ADCertificatePayloadReduxForm;
