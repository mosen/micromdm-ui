import {configure} from '@kadira/storybook';

function loadStories () {
  'use strict';

  require('../src/js/components/stories/Header');
}

configure(loadStories, module);