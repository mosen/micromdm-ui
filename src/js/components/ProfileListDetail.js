'use strict';
import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import SettingsApplications from 'material-ui/svg-icons/action/settings-applications';

class ProfileListDetail extends Component {

  static propTypes = {
    items: PropTypes.array,
    lastUpdated: PropTypes.object, // Expected to be `moment` object in UTC.
    expanded: PropTypes.bool,

    onExpandChange: PropTypes.func.isRequired
  };

  static defaultProps = {
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
          title='Profiles'
          subtitle={lastUpdatedTitle}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <List>
            {items.length > 0 &&
              items.map((profile) => {
                return <ListItem>{profile.profile_uuid}</ListItem>;
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

export default ProfileListDetail;