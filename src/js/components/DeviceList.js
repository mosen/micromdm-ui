'use strict';
import React, {Component, PropTypes} from 'react';
import moment from 'moment';
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

// Fetch an SVG icon depending on the product name
const iconForProductName = function (productName) {
  if (productName.indexOf('iPhone') !== -1) {
    return <PhoneIphone />;
  } else if (productName.indexOf('iMac') !== -1) {
    return <DesktopMac />;
  } else if (productName.indexOf('iPad') !== -1) {
    return <TabletMac />;
  } else {
    return <HelpOutline />;
  }
};

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
              <TableHeaderColumn>Serial</TableHeaderColumn>
              <TableHeaderColumn>OS</TableHeaderColumn>
              <TableHeaderColumn>Last Seen</TableHeaderColumn>
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
                <TableRowColumn className='DeviceColumn'>{iconForProductName(row.product_name)}</TableRowColumn>
                <TableRowColumn>{row.serial_number}</TableRowColumn>
                <TableRowColumn>{row.os_version}</TableRowColumn>
                <TableRowColumn>{row.last_checkin && moment(row.last_checkin).local().fromNow()}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

}

export default DeviceList;
