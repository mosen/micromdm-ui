'use strict';

import React, {Component, PropTypes} from 'react';
import moment from 'moment';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';

class CommandList extends Component {

  static propTypes = {
    params: PropTypes.shape({
      uuid: PropTypes.string
    }),
    items: PropTypes.array,
    lastUpdated: PropTypes.object // Expected to be `moment` object in UTC.
  };

  static defaultProps = {
    expanded: false
  };

  componentWillMount () {
    this.props.api.index(this.props.udid);
  }

  render () {
    const {
      commands: {
        items,
        lastUpdated
      }
    } = this.props;

    let lastUpdatedTitle = 'Never received update from device(s)';

    if (moment.isMoment(lastUpdated)) {
      const localMoment = lastUpdated.local();
      lastUpdatedTitle = `Last updated ${localMoment.fromNow()}`;
    }

    const removeItem = (deviceUdid, commandUuid) => (evt) => {
      this.props.api.destroy(deviceUdid, commandUuid);
    };

    return (
      <div className='CommandList'>
        <Card>
          <CardHeader
            title='Commands'
            subtitle={lastUpdatedTitle}
          />
          <CardText>
            <List>
              {items && items.length > 0 &&
              items.map((command) => {
                return <ListItem
                  primaryText={command.Command.request_type}
                  secondaryText={command.CommandUUID}
                  rightIconButton={<IconButton
                    tooltip="remove"
                    tooltipPosition="bottom-left"
                    onClick={removeItem(this.props.udid, command.CommandUUID)}
                  ><Clear /></IconButton>}
                  />;
              })}
            </List>
          </CardText>
          <CardActions>
            <FlatButton label='refresh' onClick={this.handleClickRefresh}/>
          </CardActions>
        </Card>
      </div>
    );
  }

}

export default CommandList;