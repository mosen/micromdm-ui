'use strict';

import React, {Component, PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import SettingsApplications from 'material-ui/svg-icons/action/settings-applications';

class ProfileListDetail extends Component {

  static propTypes = {
    profiles: PropTypes.array,
    lastUpdated: PropTypes.string
  };

  static defaultProps = {
    lastUpdated: '...'
  };

  render () {
    const {
      profiles,
      lastUpdated
    } = this.props;

    return (
      <Card>
        <CardHeader
          title='Profiles'
          subtitle={lastUpdated}
          avatar={<Avatar icon={<SettingsApplications />} />}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <List>
            {!profiles &&
              <ListItem disabled>There are no profiles installed on this device.</ListItem>
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