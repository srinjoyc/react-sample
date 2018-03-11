import React from 'react';
import { FormattedMessage } from 'react-intl';
import A from './A';
import Img from './Img';
import Banner from './banner.jpg';

class Sajjad extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      <A>
        <Img src={Banner} alt="My Pic" />
      </A>
      </div>
    );
  }
}
export default Sajjad;
