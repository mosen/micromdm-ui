'use strict';
import React, {Component, PropTypes} from 'react';
import {List, ListItem} from 'material-ui/List';
import Add from 'material-ui/svg-icons/content/add';

export default class WorkflowDrawer extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    onClickAdd: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.handleTouchTapItem = this.handleTouchTapItem.bind(this);
  }

  handleTouchTapItem (evt, item) {
    evt.preventDefault();

    const workflowItem = evt.currentTarget.value;

    this.props.onClickAdd(item);
  }

  render () {
    const {items} = this.props;

    return (
      <div>
        <div className='mui-padded'>
          <h3>Workflows</h3>
        </div>
        <List>
          {!items || items.length === 0 &&
            <ListItem disabled primaryText='There are no workflows available' />
          }
          {items.length > 0 && items.map((item) => {
            return <ListItem
              key={item.uuid}
              primaryText={item.name}
              secondaryText={item.uuid}
              leftIcon={<Add />}
              onTouchTap={(evt) => this.handleTouchTapItem(evt, item)}
              value={item}
            />;
          })}
        </List>
      </div>
    );
  }

}
