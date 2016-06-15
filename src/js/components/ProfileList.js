'use strict';
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import GetApp from 'material-ui/svg-icons/action/get-app';

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

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

import './ProfileList.scss';

const style = {margin: 5};

class ProfileList extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array,
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
      <div className='ProfileList'>
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
                <TableHeaderColumn>Identifier</TableHeaderColumn>
                <TableHeaderColumn>UUID</TableHeaderColumn>
                <TableHeaderColumn className='ActionColumn'>Action</TableHeaderColumn>
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
                  <TableRowColumn>{row.payload_identifier}</TableRowColumn>
                  <TableRowColumn>{row.profile_uuid}</TableRowColumn>
                  <TableRowColumn className='ActionColumn'><GetApp /></TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      </div>
    );
  }

}

export default ProfileList;
