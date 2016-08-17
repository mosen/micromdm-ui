'use strict';
import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Update from 'material-ui/svg-icons/action/update';

// Update list shows a list of pending updates (for macOS devices only)
class UpdateList extends Component {

  static propTypes = {
    items: PropTypes.array,
    lastUpdated: PropTypes.string
  };

  static defaultProps = {
    lastUpdated: '...'
  };

  render () {
    const {
      items,
      lastUpdated
    } = this.props;

    let lastUpdatedTitle = 'Never received update from device(s)';

    if (moment.isMoment(lastUpdated)) {
      const localMoment = lastUpdated.local();
      lastUpdatedTitle = `Last updated ${localMoment.fromNow()}`;
    }

    return (
      <Card>
        <CardHeader
          title='Updates'
          subtitle={lastUpdatedTitle}
        />
        <CardText>
          <List>
            {items.length > 0 && items.map((update) => {
              return <ListItem></ListItem>;
            })}
          </List>
        </CardText>
        <CardActions>
          <FlatButton label='check' onClick={this.handleClickRefresh}/>
        </CardActions>
      </Card>
    );
  }

}

export default UpdateList;
