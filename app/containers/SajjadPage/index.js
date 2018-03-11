import React from 'react';
import { Button, Card, CardBody, CardTitle, CardText, CardBlock, CardSubtitle } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStore } from 'redux';

import H1 from 'components/H1';
import messages from 'containers/FeaturePage/messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import Sajjad from 'components/Sajjad';
import Counter from 'components/Counter';

export default class SajjadPage extends React.Component {  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
      <Sajjad></Sajjad>
      <Card body inverse color="danger">
        <CardTitle>CardTitle</CardTitle>
        <CardText>CardBody</CardText>
      </Card>
      <Counter></Counter>
      </div>
    );
  }
}
