'use strict';
import React, {Component, PropTypes} from 'react';
import moment from 'moment';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';

import FlatButton from 'material-ui/FlatButton';
import Https from 'material-ui/svg-icons/action/https';
import Person from 'material-ui/svg-icons/social/person';

class CertificateList extends Component {

  static propTypes = {
    params: PropTypes.shape({
      uuid: PropTypes.string
    }),
    items: PropTypes.array,
    lastUpdated: PropTypes.object, // Expected to be `moment` object in UTC.
    loading: PropTypes.bool,
    error: PropTypes.bool,
    errorDetails: PropTypes.object,

    // Handlers
    onRefresh: PropTypes.func.isRequired
  };

  static defaultProps = {
    items: [],
    loading: false,
    error: false,
    errorDetails: {}
  };

  constructor (props) {
    super(props);

    this.handleClickRefresh = this.handleClickRefresh.bind(this);
  }

  componentWillMount () {
    this.props.api.certsIndex(this.props.params.uuid);
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
      errorDetails
    } = this.props.certificates;

    let lastUpdatedTitle = 'Never received update from device(s)';

    if (moment.isMoment(lastUpdated)) {
      const localMoment = lastUpdated.local();
      lastUpdatedTitle = `Last updated ${localMoment.fromNow()}`;
    }

    return (
      <Card>
        <CardHeader
          title='Certificates'
          subtitle={lastUpdatedTitle}
        />
        <CardText>
          {loading && <CircularProgress />}
          <List>
            {items.length > 0 && items.map((cert) => {
              const icon = cert.is_identity ? <Person /> : <Https />;
              return <ListItem
                key={cert.uuid}
                primaryText={cert.common_name}
                leftIcon={icon} />;
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

export default CertificateList;