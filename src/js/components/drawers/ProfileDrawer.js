'use strict';
import React, {Component, PropTypes} from 'react';
import {List, ListItem} from 'material-ui/List';
import Add from 'material-ui/svg-icons/content/add';

export default class ProfileDrawer extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    onClickAdd: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.handleTouchTapItem = this.handleTouchTapItem.bind(this);
  }

  handleTouchTapItem (evt) {
    evt.preventDefault();
    const profileItem = evt.currentTarget.value;

    this.props.onClickAdd(profileItem);
  }

  render () {
    const { items } = this.props;

    return (
      <div>
        <div className='mui-padded'>
          <h3>Profiles</h3>
        </div>
        <List>
          {!items || items.length === 0 &&
            <ListItem disabled primaryText='There are no profiles available' />
          }
          {items.length > 0 && items.map((item) => {
            return <ListItem
              key={item.payload_identifier}
              primaryText={item.payload_identifier}
              secondaryText={item.profile_uuid}
              leftIcon={<Add />}
              onTouchTap={this.handleTouchTapItem}
              value={item}
            />;
          })}
        </List>
      </div>
    );
  }

}
