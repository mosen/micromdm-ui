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
import {Card, CardHeader} from 'material-ui/Card';
import ProfileListItem from './list_items/ProfileListItem';
import ProfileDrawer from './drawers/ProfileDrawer';
import ApplicationDrawer from './drawers/ApplicationDrawer';
import WorkflowDrawer from './drawers/WorkflowDrawer';

class EditWorkflow extends Component {

  static propTypes = {
    api: PropTypes.shape({
      read: PropTypes.func.isRequired,
      create: PropTypes.func.isRequired,
      update: PropTypes.func.isRequired
    }),
    ui: PropTypes.shape({
      pickApplicationsVisible: PropTypes.func,
      pickProfilesVisible: PropTypes.func,
      pickWorkflowsVisible: PropTypes.func,
      drawerVisible: PropTypes.func,
      addProfile: PropTypes.func,
      removeProfile: PropTypes.func,
      changeNameInput: PropTypes.func
    }),
    router: PropTypes.object,
    name: PropTypes.string,
    workflow: PropTypes.object,
    profiles: PropTypes.array.isRequired,
    applications: PropTypes.array.isRequired,
    workflows: PropTypes.array.isRequired
  };

  constructor (props) {
    super(props);

    this.handleAppsItemTouchTap = this.handleAppsItemTouchTap.bind(this);
    this.handleProfilesItemTouchTap = this.handleProfilesItemTouchTap.bind(this);
    this.handleIncludedItemTouchTap = this.handleIncludedItemTouchTap.bind(this);
    this.handleCloseDrawerTouchTap = this.handleCloseDrawerTouchTap.bind(this);
    this.removeProfile = this.removeProfile.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentWillMount () {
    if (this.props.params.uuid) {
      this.props.api.read(this.props.params.uuid);
    }
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

  removeProfile (item) {
    return (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      this.props.ui.removeProfile(item.profile_uuid);
    };
  };

  handleSave (evt) {
    evt.preventDefault();

    const workflow = {
      'name': this.props.workflow.name,
      'profiles': this.props.workflow.profiles,
      'applications': this.props.workflow.applications,
      'included_workflows': this.props.workflow.workflows
    };

    if (this.props.workflow.uuid) {
      this.props.api.update(this.props.workflow.uuid, workflow);
    } else {
      this.props.api.create(workflow);
    }
  }

  handleNameChange (evt) {
    this.props.ui.changeNameInput(evt.currentTarget.value);
  }

  handleClickBack = () => {
    this.props.router.goBack();
  };

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
        <FlatButton label='Back' onClick={this.handleClickBack}/>
        <Card>
          <CardHeader
            title='New Workflow'
            subtitle={workflow.uuid}
          />
          <List>
            <ListItem disabled><TextField
              ref={(f) => this._name = f}
              onChange={this.handleNameChange}
              hintText='Workflow name (required)'
            />
            </ListItem>
            <Subheader>Profiles</Subheader>
            {workflow.profiles.length > 0 && workflow.profiles.map((item) => {
              if (!item) return null;
              return <ProfileListItem key={item.profile_uuid} item={item} onRemove={this.removeProfile(item)} />;
            })}
            <ListItem
              primaryText='Add a profile'
              secondaryText='Click here to add a profile to this workflow.'
              leftAvatar={<Avatar icon={<Add />} />}
              onTouchTap={this.handleProfilesItemTouchTap}
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
          <FlatButton label='Save' onTouchTap={this.handleSave} />
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
