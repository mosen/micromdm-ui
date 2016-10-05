import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Divider, List, ListItem, MenuItem} from 'material-ui';
import Paper from 'material-ui/Paper';
import RadioButton from 'material-ui/RadioButton';
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle
} from 'redux-form-material-ui';

const validate = (values) => {
  'use strict';
  const errors = {};

  return errors;
};

class ExchangePayloadForm extends Component {

  static defaultProps = {
    compatIOSEnabled: true,
    compatIOS: '10.0.0',
    compatMacOSEnabled: true,
    compatMacOS: '12.0.0'
  };

  render () {
    const {
      compatIOS,
      compatMacOS,
      handleSubmit
    } = this.props;

    // Certificate, CertificateName, CertificatePassword

    return (
      <Paper zDepth={1} className='mui-padded'>
        <form onSubmit={handleSubmit}>
          <h2>Exchange Payload</h2>

          <h4>Server</h4>
          <div>
            <Field name='host' component={TextField} floatingLabelText='Host' fullWidth />
          </div>
          <div>
            <Field name='ssl' component={Toggle} label='SSL'/>
          </div>

          <h4>Server Advanced (macOS)</h4>
          <div>
            <Field name='port' component={TextField} floatingLabelText='Port' type='number' fullWidth />
          </div>
          <div>
            <Field name='path' component={TextField} floatingLabelText='Path' fullWidth />
          </div>

          <h4>External connection (macOS)</h4>
          <div>
            <Field name='externalHost' component={TextField} floatingLabelText='Host' fullWidth />
          </div>
          <div>
            <Field name='externalSsl' component={Toggle} label='SSL'/>
          </div>
          <div>
            <Field name='externalPort' component={TextField} floatingLabelText='Port' type='number' fullWidth />
          </div>
          <div>
            <Field name='externalPath' component={TextField} floatingLabelText='Path' fullWidth />
          </div>

          <h4>Identity</h4>
          <div>
            <Field name='email' component={TextField} floatingLabelText='E-mail address' fullWidth />
          </div>

          <div>
            <p>Authentication</p>
            <Field name='identityOption' component={RadioButtonGroup}>
              <RadioButton value='payload' label='Certificate Payload' />
              <RadioButton value='credentials' label='Username and Password' />
              <RadioButton value='embedded' label='Upload Certificate' />
            </Field>
          </div>

          <div>
            <Field name='username' component={TextField} floatingLabelText='Username (Blank to prompt)' fullWidth />
          </div>
          <div>
            <Field name='password' component={TextField} floatingLabelText='Password (Blank to prompt)' type='password' fullWidth />
          </div>
          <div>
            <Field name='payloadCertificateUUID' component={SelectField} hintText='Use SCEP Payload' fullWidth>
              <MenuItem value='uuid' primaryText='Selected Certificate Payload' />
            </Field>
          </div>
          <div>
            <Field name='certificate' component={TextField} floatingLabelText='Certificate (.p12)' fullWidth disabled />
          </div>
          <div>
            <Field name='certificateName' component={TextField} floatingLabelText='Certificate Name' fullWidth />
          </div>
          <div>
            <Field name='certificatePassword' component={TextField} type='password' floatingLabelText='Certificate Password' fullWidth />
          </div>

          <h4>Restrictions</h4>
          <div>
            <Field name='preventMove' component={Toggle} label='Prevent moving e-mail'/>
          </div>
          <div>
            <Field name='preventAppSheet' component={Toggle} label='Disallow e-mail from apps other than Mail' />
          </div>

          <h4>Encryption</h4>
          <div>
            <Field name='smimeEnabled' component={Toggle} label='S/MIME'/>
          </div>
          <div>
            <Field name='smimeEnablePerMessageSwitch' component={Toggle}
                   label='S/MIME per-message signing and encryption switch'/>
          </div>

          <h4>Options</h4>
          <div>
            <Field name='disableMailRecentsSyncing' component={Toggle} label='Account is excluded from recents syncing'/>
          </div>
          <div>
            <Field name='mailNumberOfPastDaysToSync' component={TextField} type='number'
                   floatingLabelText='Number of days to sync' fullWidth />
          </div>
        </form>
      </Paper>
    );
  }
}

const ExchangePayloadReduxForm = reduxForm({
  form: 'payload_exchange',
  validate
})(ExchangePayloadForm);

export default ExchangePayloadReduxForm;
