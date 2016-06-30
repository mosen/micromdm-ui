'use strict';
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';

import './WorkflowList.scss';

class WorkflowList extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array,
    selection: PropTypes.array,
    onSelectionChange: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.handleRowSelection = this.handleRowSelection.bind(this);
  }

  handleRowSelection (selection) {
    switch (selection) {
      case 'all':
        this.props.onSelectionChange(this.props.items);
        break;
      case 'none':
        this.props.onSelectionChange([]);
        break;
      default:
        const selectedItems = selection.map((itemIndex) => {
          return this.props.items[itemIndex];
        });

        this.props.onSelectionChange(selectedItems);
    }
  }

  render () {
    const {
      items,
      loading,
      selection
    } = this.props;

    return (
      <div className='WorkflowList'>
        {loading && <CircularProgress />}
        {!loading &&
          <Table
            fixedHeader
            fixedFooter
            selectable
            multiSelectable
            onRowSelection={this.handleRowSelection}
          >
            <TableHeader
              displaySelectAll
              adjustForCheckbox
              enableSelectAll
            >
              <TableRow>
                <TableHeaderColumn>UUID</TableHeaderColumn>
                <TableHeaderColumn>name</TableHeaderColumn>
                <TableHeaderColumn>Profiles</TableHeaderColumn>
                <TableHeaderColumn>Apps</TableHeaderColumn>
                <TableHeaderColumn>Workflows</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody
              displayRowCheckbox
              deselectOnClickaway
              showRowHover
              stripedRows={false}
            >
              {items.map((row, index) => (
                <TableRow key={index} selected={selection.indexOf(row.payload_identifier) !== -1}>
                  <TableRowColumn>{row.uuid}</TableRowColumn>
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn>{row.profiles.length}</TableRowColumn>
                  <TableRowColumn>{row.applications && row.applications.length}</TableRowColumn>
                  <TableRowColumn>{row.included_workflows && row.included_workflows.length}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
        </Table>
        }
      </div>
    );
  }

}

export default WorkflowList;
