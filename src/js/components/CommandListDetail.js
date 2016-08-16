'use strict';

import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';

class CommandListDetail extends Component {

  static propTypes = {
    items: PropTypes.array,
    lastUpdated: PropTypes.object, // Expected to be `moment` object in UTC.
    expanded: PropTypes.bool,

    onExpandChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    expanded: false
  };

  render () {
    const {
      items,
      lastUpdated,
      expanded
    } = this.props;

    let lastUpdatedTitle = 'Never received update from device(s)';

    if (moment.isMoment(lastUpdated)) {
      const localMoment = lastUpdated.local();
      lastUpdatedTitle = `Last updated ${localMoment.fromNow()}`;
    }

    return (
      <Card
        expanded={expanded}
        onExpandChange={this.props.onExpandChange}
      >
        <CardHeader
          title='Commands'
          subtitle={lastUpdatedTitle}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <List>
            {items.length > 0 &&
              items.map((command) => {
                return <ListItem
                  primaryText={command.Command.request_type}
                  secondaryText={command.command_uuid}
                  rightIconButton={<IconButton tooltip="Delete" tooltipPosition="top-left"><Clear /></IconButton>}
                ></ListItem>;
              })
            }
          </List>
        </CardText>
        <CardActions>
          <FlatButton label='refresh' onClick={this.handleClickRefresh}/>
        </CardActions>
      </Card>
    );
  }

}

export default CommandListDetail;