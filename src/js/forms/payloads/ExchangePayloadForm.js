import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Divider, List, ListItem} from 'material-ui';
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

  static propTypes = {
    compatIOS: PropTypes.string.isRequired,
    compatMacOS: PropTypes.string.isRequired
  };

  static defaultProps = {
    compatIOS: '10.0',
    compatMacOS: '12.0'
  };

  render () {
    const {
      compatIOS,
      compatMacOS
    } = this.props;

    // Certificate, CertificateName, CertificatePassword

    return (
      <form>
        <h4>Server</h4>
        <Field name='host' component={TextField} hintText='Host' floatingLabelText='Host'/>
        <br />
        <Field name='port' component={TextField} hintText='Port' floatingLabelText='Port' type='number' />
        <br />
        <Field name='ssl' component={Toggle} label='SSL'/>
        <br />

        <h4>Identity</h4>
        <Field name='email' component={TextField} hintText='E-mail address' floatingLabelText='E-mail address'/>
        <br />

        <Field name='username' component={TextField} hintText='Username (Blank to prompt)'
               floatingLabelText='Username'/>
        <br />
        <Field name='password' component={TextField} hintText='Password (Blank to prompt)' floatingLabelText='Password'
               type='password'/>
        <br />

        <h4>Options</h4>
        <List>
          <ListItem>
            <Field name='preventMove' component={Toggle} label='Prevent moving e-mail'/>
          </ListItem>
          <ListItem>
            <Field name='preventAppSheet' component={Toggle} label='Only allow use from Apple Mail app'/>
          </ListItem>
          <ListItem>
            <Field name='smimeEnabled' component={Toggle} label='S/MIME'/>
          </ListItem>
          <ListItem>
            <Field name='smimeEnablePerMessageSwitch' component={Toggle}
               label='S/MIME per-message signing and encryption switch'/>
          </ListItem>
          <ListItem>
            <Field name='disableMailRecentsSyncing' component={Toggle} label='Account is excluded from recents syncing'/>
          </ListItem>
        </List>

        <Field name='mailNumberOfPastDaysToSync' component={TextField} type='number' label='Number of days to sync'
               floatingLabelText='Number of days to sync'/>
        <br />
      </form>
    );
  }
}

const ExchangePayloadReduxForm = reduxForm({
  form: 'payload_exchange',
  validate
})(ExchangePayloadForm);

export default ExchangePayloadReduxForm;
