'use strict';
import React, {Component, PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import PhoneIphone from 'material-ui/svg-icons/hardware/phone-iphone';
import TabletMac from 'material-ui/svg-icons/hardware/tablet-mac';
import LaptopMac from 'material-ui/svg-icons/hardware/laptop-mac';
import DesktopMac from 'material-ui/svg-icons/hardware/desktop-mac';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';

import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

import './DeviceList.scss';

const style = {margin: 5};

class DeviceList extends Component {

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
      <div className='DeviceList'>
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
              <TableHeaderColumn className='DeviceColumnHeader'>Device</TableHeaderColumn>
              <TableHeaderColumn>UUID</TableHeaderColumn>
              <TableHeaderColumn>UDID</TableHeaderColumn>
              <TableHeaderColumn>Serial</TableHeaderColumn>
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
                <TableRowColumn className='DeviceColumn'><Avatar icon={<HelpOutline />} size={30} style={style} /></TableRowColumn>
                <TableRowColumn>{row.uuid}</TableRowColumn>
                <TableRowColumn>{row.udid}</TableRowColumn>
                <TableRowColumn>{row.serial_number}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

}

export default DeviceList;
