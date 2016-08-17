'use strict';
import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import SettingsApplications from 'material-ui/svg-icons/action/settings-applications';

class ProfileListDetail extends Component {

  static propTypes = {
    items: PropTypes.array,
    lastUpdated: PropTypes.object // Expected to be `moment` object in UTC.
  };

  static defaultProps = {
  };

  componentWillMount () {
    this.props.api.profilesIndex(this.props.params.uuid);
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
          title='Profiles'
          subtitle={lastUpdatedTitle}
        />
        <CardText>
          <List>
            {items.length > 0 &&
              items.map((profile) => {
                return <ListItem
                  primaryText={profile.profile_uuid} />;
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