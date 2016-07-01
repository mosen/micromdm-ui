'use strict';

import React, {Component, PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Update from 'material-ui/svg-icons/action/update';

// Update list shows a list of pending updates (for macOS devices only)
class UpdateListDetail extends Component {

  static propTypes = {
    updates: PropTypes.array,
    lastUpdated: PropTypes.string
  };

  static defaultProps = {
    lastUpdated: '...'
  };

  render () {
    const {
      updates,
      lastUpdated
    } = this.props;

    return (
      <Card>
        <CardHeader
          title='Updates'
          subtitle={lastUpdated}
          avatar={<Avatar icon={<Update />} />}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <List>
            {!updates &&
              <ListItem disabled>There are no pending operating system updates for this device.</ListItem>
            }
          </List>
        </CardText>
        <CardActions>
          <FlatButton label='check' onClick={this.handleClickRefresh}/>
        </CardActions>
      </Card>
    );
  }

}

export default UpdateListDetail;
