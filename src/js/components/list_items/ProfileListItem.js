import React, {Component, PropTypes} from 'react';
import {ListItem} from 'material-ui/List';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';

export default class ProfileListItem extends Component {

  static propTypes = {
    item: PropTypes.shape({
      payload_identifier: PropTypes.string.isRequired,
      profile_uuid: PropTypes.string.isRequired
    }).isRequired,
    onRemove: PropTypes.func,
    readOnly: PropTypes.bool
  };

  render () {
    const {
      item,
      onRemove,
      readOnly
    } = this.props;

    const canRemove = !readOnly && onRemove !== undefined;

    return (
      <ListItem
        primaryText={item.payload_identifier}
        secondaryText={item.profile_uuid}
        rightIconButton={<IconButton onClick={onRemove} value={item.payload_identifier}><Clear /></IconButton>}
      />
    );
  }
}
