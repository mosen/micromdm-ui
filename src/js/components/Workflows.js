'use strict';
import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';

import WorkflowList from './WorkflowList';
import WorkflowsToolbar from './WorkflowsToolbar';

class Workflows extends Component {

  static propTypes = {
    index: PropTypes.func.isRequired,
    workflows: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);

    this.handleAddAction = this.handleAddAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
  }

  componentWillMount () {
    this.props.index();
  }

  handleAddAction (evt) {
    browserHistory.push('/workflows/add');
  }

  handleDeleteAction (evt) {

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
        <WorkflowsToolbar
          selection={workflows.selection}
          onAddAction={this.handleAddAction}
          onDeleteAction={this.handleDeleteAction}
        />
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
