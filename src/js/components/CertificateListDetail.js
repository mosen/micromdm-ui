'use strict';

import React, {Component, PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Https from 'material-ui/svg-icons/action/https';

class CertificateListDetail extends Component {

  static propTypes = {
    certificates: PropTypes.array,
    lastUpdated: PropTypes.string,

    // Handlers
    onRefresh: PropTypes.func.isRequired
  };

  static defaultProps = {
    lastUpdated: '...'
  };

  constructor (props) {
    super(props);

    this.handleClickRefresh = this.handleClickRefresh.bind(this);
  }

  handleClickRefresh (evt) {
    evt.preventDefault();
    evt.stopPropagation();

    this.props.onRefresh();
  }

  render () {
    const {
      lastUpdated,
      certificates
    } = this.props;

    return (
      <Card>
        <CardHeader
          title='Certificates'
          subtitle={lastUpdated}
          avatar={<Avatar icon={<Https />} />}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <List>
            {!certificates &&
              <ListItem disabled>There are no certificates on this device.</ListItem>
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

export default CertificateListDetail;