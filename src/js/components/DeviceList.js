'use strict';
import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import {browserHistory} from 'react-router';

import FlatButton from 'material-ui/FlatButton';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import ProductIcon from './ProductIcon';
import CircularProgress from 'material-ui/CircularProgress';

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
  cyan500,
  cyan800
} from 'material-ui/styles/colors';

import './DeviceList.scss';

const style = {margin: 5};

const detailButtonStyle = {margin: 3};

class DeviceList extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array,
    onSelectionChange: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.handleDetailClick = this.handleDetailClick.bind(this);
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

  handleDetailClick (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    browserHistory.push(evt.currentTarget.href);
  }

  makeShowDetailHandler (uuid) {
    return (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      browserHistory.push(`/devices/${uuid}`);
    };
  }

  render () {
    const {
      items,
      loading,
      selection
    } = this.props;

    return (
      <div className='DeviceList'>
        {loading && <CircularProgress />}
        <Table
          fixedHeader
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
              <TableHeaderColumn className='DeviceColumnHeader'>Device</TableHeaderColumn>
              <TableHeaderColumn>Serial</TableHeaderColumn>
              <TableHeaderColumn>OS</TableHeaderColumn>
              <TableHeaderColumn>Last Seen</TableHeaderColumn>
              <TableHeaderColumn>Detail</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox
            deselectOnClickaway={false}
            showRowHover
            stripedRows={false}
          >
            {items.map((row, index) => (
              <TableRow key={index} selected={selection.indexOf(row.uuid) !== -1}>
                <TableRowColumn className='DeviceColumn'><ProductIcon name={row.product_name} /></TableRowColumn>
                <TableRowColumn>{row.serial_number}</TableRowColumn>
                <TableRowColumn>{row.os_version}</TableRowColumn>
                <TableRowColumn>{row.last_checkin && moment(row.last_checkin).local().fromNow()}</TableRowColumn>
                <TableRowColumn>
                  <FlatButton
                    hoverColor={cyan500}
                    icon={<KeyboardArrowRight />}
                    style={detailButtonStyle}
                    href={`/devices/${row.uuid}`}
                    linkButton
                    onClick={this.makeShowDetailHandler(row.uuid)}
                    />
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

}

export default DeviceList;
