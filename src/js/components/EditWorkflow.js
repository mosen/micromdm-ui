'use strict';
import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import Add from 'material-ui/svg-icons/content/add';
import Clear from 'material-ui/svg-icons/content/clear';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ProfileListItem from './list_items/ProfileListItem';
import ProfileDrawer from './drawers/ProfileDrawer';
import ApplicationDrawer from './drawers/ApplicationDrawer';
import WorkflowDrawer from './drawers/WorkflowDrawer';

import {
  cyan50
} from 'material-ui/styles/colors';

const actionStyle = {
  backgroundColor: cyan50
};

class EditWorkflow extends Component {

  static propTypes = {
    ui: PropTypes.shape({
      pickApplicationsVisible: PropTypes.func,
      pickProfilesVisible: PropTypes.func,
      pickWorkflowsVisible: PropTypes.func,
      drawerVisible: PropTypes.func,
      addProfile: PropTypes.func,
      removeProfile: PropTypes.func
    }),
    workflow: PropTypes.object
  };

  constructor (props) {
    super(props);

    this.handleAppsItemTouchTap = this.handleAppsItemTouchTap.bind(this);
    this.handleProfilesItemTouchTap = this.handleProfilesItemTouchTap.bind(this);
    this.handleIncludedItemTouchTap = this.handleIncludedItemTouchTap.bind(this);
    this.handleCloseDrawerTouchTap = this.handleCloseDrawerTouchTap.bind(this);
    this.handleRemoveProfile = this.handleRemoveProfile.bind(this);
  }

  componentWillMount () {
    // this.props.api.read();
  }

  handleProfilesItemTouchTap (evt) {
    evt.preventDefault();
    this.props.ui.pickProfilesVisible();
  }

  handleAppsItemTouchTap (evt) {
    evt.preventDefault();
    this.props.ui.pickApplicationsVisible();
  }

  handleIncludedItemTouchTap (evt) {
    evt.preventDefault();
    this.props.ui.pickWorkflowsVisible();
  }

  handleCloseDrawerTouchTap (evt) {
    evt.preventDefault();
    this.props.ui.drawerVisible(false);
  }

  handleRemoveProfile (evt) {
    evt.preventDefault();
    const removeButton = evt.currentTarget;
    const profileIdentifier = removeButton.value;

    this.props.ui.removeProfile(profileIdentifier);
  }

  render () {
    const {
      workflow,
      profiles,
      applications,
      workflows,
      ui: {
        addProfile,
        addApplication,
        addWorkflow
      }
    } = this.props;

    const onTouchTapProfileItem = (item) => {
      return (evt) => {
        evt.preventDefault();
        this.props.ui.addProfile(item);
      };
    };

    let drawerContent = '';
    switch (workflow.drawerType) {
      case 'profiles':
        drawerContent = <ProfileDrawer items={profiles} onClickAdd={addProfile} />;
        break;
      case 'applications':
        drawerContent = <ApplicationDrawer items={applications} onClickAdd={addApplication} />;
        break;
      case 'workflows':
        drawerContent = <WorkflowDrawer items={workflows} onClickAdd={addWorkflow} />;
        break;
    }

    return (
      <div className='EditWorkflow'>
        <Card>
          <CardHeader
            title='New Workflow'
          />
          <List>
            <ListItem><TextField
              hintText='Workflow name (required)'
            />
            </ListItem>
            <Subheader>Profiles</Subheader>
            {workflow.profiles.length > 0 && workflow.profiles.map((item) => {
              return <ProfileListItem key={item.payload_identifier} item={item} onRemove={this.handleRemoveProfile} />;
            })}
            <ListItem
              primaryText='Add a profile'
              secondaryText='Click here to add a profile to this workflow.'
              leftAvatar={<Avatar icon={<Add />} />}
              onTouchTap={this.handleProfilesItemTouchTap}
              style={actionStyle}
            />
            <Divider inset/>
            <Subheader>Applications</Subheader>
            <ListItem
              primaryText='Add an application'
              secondaryText='Click here to add an application to this workflow.'
              leftAvatar={<Avatar icon={<Add />} />}
              onTouchTap={this.handleAppsItemTouchTap}
            />
            <Divider inset/>
            <Subheader>Included Workflows</Subheader>
            <ListItem
              primaryText='Include another workflow'
              secondaryText='Click here to include another workflow in this workflow.'
              leftAvatar={<Avatar icon={<Add />} />}
              onTouchTap={this.handleIncludedItemTouchTap}
            />
          </List>
          <FlatButton label='Save'/>
        </Card>

        <Drawer width={400} openSecondary open={workflow.drawerOpen}>
          <IconButton onClick={this.handleCloseDrawerTouchTap}><Clear /></IconButton>
          {drawerContent}
        </Drawer>
      </div>
    );
  }

}

export default EditWorkflow;
