'use strict';
import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import GetApp from 'material-ui/svg-icons/action/get-app';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import Loading from './Loading';

import './ProfileList.scss';

class ProfileList extends Component {

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
      <div className='ProfileList'>
        {loading && <Loading message='Fetching profiles' />}
        {!loading &&
          <Table
            fixedHeader
            fixedFooter
            selectable={items.length > 0}
            multiSelectable
            onRowSelection={this.handleRowSelection}
          >
            <TableHeader
              displaySelectAll
              adjustForCheckbox
              enableSelectAll={items.length > 0}
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
              {items.length === 0 &&
                <TableRow selectable={false}>
                  <TableRowColumn colSpan='3'>There are no profiles available.</TableRowColumn>
                </TableRow>
              }
              {items.map((row, index) => (
                <TableRow key={index} selected={selection.indexOf(row.payload_identifier) !== -1}>
                  <TableRowColumn>{row.payload_identifier}</TableRowColumn>
                  <TableRowColumn>{row.profile_uuid}</TableRowColumn>
                  <TableRowColumn className='ActionColumn'><FlatButton label='Download' labelPosition='before' primary icon={<GetApp />} /></TableRowColumn>
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
