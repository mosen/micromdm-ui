'use strict';
import React, {Component, PropTypes} from 'react';
import moment from 'moment';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

import FlatButton from 'material-ui/FlatButton';

// Application list shows a list of applications installed on the specified device.
class ApplicationList extends Component {

  static propTypes = {
    items: PropTypes.array,
    lastUpdated: PropTypes.string
  };

  static defaultProps = {
    lastUpdated: '...'
  };

  componentWillMount () {
    this.props.api.appsIndex(this.props.params.uuid);
  }

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
          title='Applications'
          subtitle={lastUpdatedTitle}
        />
        <CardText>
          <List>
            {items.length > 0 && items.map((app) => {
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

export default ApplicationList;
