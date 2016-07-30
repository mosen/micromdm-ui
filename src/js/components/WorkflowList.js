'use strict';
import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import Loading from './Loading';
import FlatButton from 'material-ui/FlatButton';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import {
  cyan500,
  cyan800
} from 'material-ui/styles/colors';
const detailButtonStyle = {margin: 3};
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

  makeShowDetailHandler (uuid) {
    return (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      browserHistory.push(`/workflows/edit/${uuid}`);
    };
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
                <TableHeaderColumn>Detail</TableHeaderColumn>
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
                  <TableRowColumn>
                    <FlatButton
                      hoverColor={cyan500}
                      icon={<KeyboardArrowRight />}
                      style={detailButtonStyle}
                      href={`/workflows/edit/${row.uuid}`}
                      linkButton
                      onClick={this.makeShowDetailHandler(row.uuid)}
                    />
                  </TableRowColumn>
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
