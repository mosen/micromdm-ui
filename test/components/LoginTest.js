import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from '../../src/js/components/Login';
import configureStore from 'redux-mock-store';
import {reducer} from 'redux-form';

const muiTheme = getMuiTheme({}, { userAgent: false });

chai.use(chaiEnzyme());

const mockStore = configureStore();

/*global describe it*/
describe('<Login />', () => {
  'use strict';

  it('should not be visible if passed prop open=false', () => {
    const store = mockStore({ form: reducer });
    const wrapper = mount(
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <Login open={false} />
        </Provider>
      </MuiThemeProvider>
    );

    expect(wrapper).to.contain(<Login open={false} />);
    expect(wrapper.find('.Login')).to.have.style('visibility', 'hidden');
  });
});
