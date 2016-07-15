import {configure} from '@kadira/storybook';

function loadStories () {
  'use strict';

  require('../src/js/components/stories/Header');

  require('../src/js/forms/stories/ExchangePayloadForm');
}

configure(loadStories, module);