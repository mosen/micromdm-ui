'use strict';
import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';
import WorkflowList from './WorkflowList';

class Workflows extends Component {

  static propTypes = {
    index: PropTypes.func.isRequired,
    workflows: PropTypes.object.isRequired
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

  handleSelectionChange (selection) {
    //this.props.ui.changeSelection(selection);
  }

  render () {
    const {
      workflows
    } = this.props;

    return (
      <div className='Workflows'>
        <RaisedButton label='Add' primary icon={<Add />} onTouchTap={this.handleAddTouchTap} />

        <WorkflowList
          items={workflows.items}
          loading={workflows.loading}
          selection={workflows.selection}
          onSelectionChange={this.handleSelectionChange}
        />
      </div>
    );
  }

}

export default Workflows;
