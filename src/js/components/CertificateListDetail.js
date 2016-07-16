'use strict';
import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Https from 'material-ui/svg-icons/action/https';
import Person from 'material-ui/svg-icons/social/person';

class CertificateListDetail extends Component {

  static propTypes = {
    items: PropTypes.array,
    lastUpdated: PropTypes.object, // Expected to be `moment` object in UTC.
    loading: PropTypes.bool,
    error: PropTypes.bool,
    errorDetails: PropTypes.object,
    expanded: PropTypes.bool,

    // Handlers
    onRefresh: PropTypes.func.isRequired,
    onExpandChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    items: [],
    loading: false,
    error: false,
    errorDetails: {},
    expanded: false
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
      items,
      lastUpdated,
      loading,
      error,
      errorDetails,
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
          title='Certificates'
          subtitle={lastUpdatedTitle}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <List>
            {items.length > 0 && items.map((cert) => {
              const icon = cert.is_identity ? <Person /> : <Https />;
              return <ListItem leftIcon={icon}>{cert.common_name}</ListItem>;
            })}
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