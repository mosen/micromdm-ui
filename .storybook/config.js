import {configure} from '@kadira/storybook';

function loadStories () {
  'use strict';

  require('../src/js/components/stories/DeviceList');
  require('../src/js/components/stories/Header');
  require('../src/js/components/stories/CertificateListDetail');
  require('../src/js/components/stories/ProfileListDetail');


  require('../src/js/forms/stories/ExchangePayloadForm');
}

configure(loadStories, module);