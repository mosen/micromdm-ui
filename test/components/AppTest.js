import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';

import App from '../../src/js/components/App';

chai.use(chaiEnzyme());

describe('<App />', () => {
  'use strict';

  it('Basically doesnt explode', () => {
    const props = {
      snackbar: {},
      snackbarActions: {
        hideSnackbar: () => {}
      }
    };

    const wrapper = shallow(<App snackbar={props.snackbar} snackbarActions={props.snackbarActions} />);
  });
});