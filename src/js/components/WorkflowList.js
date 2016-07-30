'use strict';
import React, {Component, PropTypes} from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import Loading from './Loading';

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
        {loading && <Loading message='Fetching workflows' />}
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
                <TableHeaderColumn>contains</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody
              displayRowCheckbox
              deselectOnClickaway
              showRowHover
              stripedRows={false}
            >
              {items.map((row, index) => (
                <TableRow key={index} selected={selection.indexOf(row.uuid) !== -1}>
                  <TableRowColumn>{row.uuid}</TableRowColumn>
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn></TableRowColumn>
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
