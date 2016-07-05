import React from 'react';
import {render, mount, shallow} from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Header from '../../src/js/components/Header';

chai.use(chaiEnzyme());

/*global describe it*/
describe('<Header />', () => {
  'use strict';
  it('does stuff', () => {
    const wrapper = shallow(<Header />);
  });
});
