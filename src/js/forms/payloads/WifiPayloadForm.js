import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

export const fields = [
  'ssidStr',
  'hiddenNetwork',
  'autoJoin',
  'encryptionType',
  'isHotspot',
  'domainName',
  'serviceProviderRoamingEnabled',
  'roamingConsortiumOIs',
  'naiRealmNames',
  'mccAndMncs',
  'displayedOperatorName',
  'proxyType',
  'captiveBypass',
  'qosMarkingPolicy',

  // WEP/WPA/ANY
  'password',
  'eapClientConfiguration',
  'payloadCertificate'
];

const validate = (values) => {
  'use strict';
  const errors = {};

  return errors;
};

class WifiPayloadForm extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render () {
    const {
      fields: {
        ssidStr,
        hiddenNetwork,
        autoJoin,
        encryptionType,
        isHotspot,
        domainName,
        serviceProviderRoamingEnabled,
        roamingConsortiumOIs,
        naiRealmNames,
        mccAndMncs,
        displayedOperatorName,
        proxyType,
        captiveBypass,
        qosMarkingPolicy,
        proxyServer,
        proxyServerPort,
        proxyUsername,
        proxyPassword,
        proxyPacURL,
        proxyPacFallbackAllowed
      },
      handleSubmit
    } = this.props;

    // This will become the compatibility checking function which decides on the min compatibility of the shown profile
    // If an argument is false it is never an available feature
    // If an argument is true it is always available on that platform
    // Otherwise the minimum version string is given
    const compat = (ios, macos) => {
      return true;
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>SSID of the Wi-Fi network to be used.</label>
          <input type='text' {...ssidStr} />
        </div>
        <div>
          <label>Network is hidden</label>
          <input type='checkbox' {...hiddenNetwork} />
        </div>
        {compat('5.0') &&
          <div>
            <label>Auto-join</label>
            <input type='checkbox' {...autoJoin} />
          </div>
        }
        {compat('4.0') &&
          <div>
            <label>Encryption type</label>
            <select {...encryptionType}>
              <option value='WEP'>WEP</option>
              <option value='WPA'>WPA</option>
              <option value='WPA2'>WPA2</option>
              <option value='Any'>Any</option>
              <option value='None'>None</option>
            </select>
          </div>
        }
        {compat('7.0', '10.9') &&
          <div>
            <label>Hotspot</label>
            <input type='checkbox' {...isHotspot} />
          </div>
        }
        {compat('7.0', '10.9') &&
          <div>
            <label>Domain name (Hotspot 2.0)</label>
            <input type='text' {...domainName} />
          </div>
        }
        {compat('7.0', '10.9') &&
          <div>
            <label>Allow connection to roaming service providers</label>
            <input type='checkbox' {...serviceProviderRoamingEnabled} />
          </div>
        }
        {compat('7.0', '10.9') &&
          <div>
            <label>Roaming consortium organization identifiers</label>
            <input type='text' {...roamingConsortiumOIs} />
          </div>
        }
        {compat('7.0', '10.9') &&
          <div>
            <label>Network Access Identifier Realm names</label>
            <input type='text' {...naiRealmNames} />
          </div>
        }
        {compat('7.0', false) &&
          <div>
            <label>Mobile Country Code/Mobile Network Code pairs used for Hotspot 2.0 negotiation.</label>
            <input type='text' {...mccAndMncs} />
          </div>
        }
        {compat('7.0', '10.9') &&
          <div>
            <label>Displayed operator name</label>
            <input type='text' {...displayedOperatorName} />
          </div>
        }
        {compat('5.0', true) &&
          <div>
            <label>Proxy type</label>
            <select {...proxyType}>
              <option value='None'>None</option>
              <option value='Manual'>Manual</option>
              <option value='Auto'>Auto</option>
            </select>
          </div>
        }
        {proxyType.value === 'Manual' &&
          <div>
            <label>Proxy server</label>
            <input type='text' {...proxyServer} />
          </div>
        }
        {proxyType.value === 'Manual' &&
          <div>
            <label>Proxy server port</label>
            <input type='number' {...proxyServerPort} />
          </div>
        }
        {proxyType.value === 'Manual' &&
          <div>
            <label>Proxy server username</label>
            <input type='text' {...proxyUsername} />
          </div>
        }
        {compat(false, '10.0') &&
          <div>
            <label>Captive bypass</label>
            <input type='checkbox' {...captiveBypass} />
          </div>
        }
        {compat('10.0', false) &&
          <div>
            <label>QoS marking policy</label>
          </div>
        }
        <div>
          <input type='submit' value='Save' />
        </div>
      </form>
    );
  }
}

const WifiPayloadReduxForm = reduxForm({
  form: 'payload_wifi',
  fields,
  validate
})(WifiPayloadForm);

export default WifiPayloadReduxForm;
