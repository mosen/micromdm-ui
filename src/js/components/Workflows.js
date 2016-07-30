'use strict';
import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';

import WorkflowList from './WorkflowList';
import WorkflowsToolbar from './WorkflowsToolbar';

class Workflows extends Component {

  static propTypes = {
    api: PropTypes.shape({
      index: PropTypes.func.isRequired,
      destroy: PropTypes.func.isRequired
    }),
    ui: PropTypes.shape({
      changeSelection: PropTypes.func.isRequired
    }),
    workflows: PropTypes.object.isRequired
  };

  componentWillMount () {
    this.props.api.index();
  }

  getSelectedWorkflows () {
    const {
      workflows: {
        items,
        selection
      }
    } = this.props;

    return items.filter(function (workflow) {
      return selection.indexOf(workflow.uuid) !== -1;
    });
  }

  handleAddAction = (evt) => {
    browserHistory.push('/workflows/add');
  };

  handleDeleteAction = (evt) => {
    const workflows = this.getSelectedWorkflows();

    workflows.forEach((workflow) => {
      this.props.api.destroy(workflow.udid);
    });
  };

  handleSelectionChange = (selection) => {
    this.props.ui.changeSelection(selection);
  };

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
