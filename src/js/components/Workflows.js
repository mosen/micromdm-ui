'use strict';
import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';

class Workflows extends Component {

  static propTypes = {
    index: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.handleAddTouchTap = this.handleAddTouchTap.bind(this);
  }

  componentWillMount () {
    this.props.index();
  }

  handleAddTouchTap (evt) {
    evt.preventDefault();
    browserHistory.push('/workflows/add');
  }

  render () {
    return (
      <div className='Workflows'>
        <RaisedButton label='Add' primary icon={<Add />} onTouchTap={this.handleAddTouchTap} />
      </div>
    );
  }

}

export default Workflows;
